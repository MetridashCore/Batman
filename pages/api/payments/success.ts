// @ts-nocheck
import stripe from "@/services/stripe/stripe";
import Cors from "micro-cors";
import { buffer } from "micro";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import {
  addInvoiceToExistingOrder,
  createOrderDetails,
  getUserTokens,
  updateUserTokens,
} from "@/services/firebase-admin/models";
import { Iorder } from "@/interface/OrderInterface";
const webhook_secret = process.env.WEEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};
const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = await buffer(req);
  const signature = req.headers["stripe-signature"]!;
  const event: Stripe.Event = stripe.webhooks.constructEvent(
    body.toString(),
    signature,
    webhook_secret
  );
  switch (event.type) {
    case "charge.succeeded":
      console.log("stared...");
      res.status(200).json({ message: "ok" }); //its not a mistake we need to send the response back to strpe immediately.we update tokens after sending the response
      const object = event.data.object.metadata;
      const userTokens = await getUserTokens(object.userId);
      const newTokens = Number(userTokens) + Number(object.tokens);
      const date = new Date();
      const orderDetails: Iorder = {
        userId: object.userId,
        paymentIntent: event.data.object.payment_intent,
        tokens: object.tokens,
        amount: event.data.object.amount,
        invoice: "",
        name: event.data.object.billing_details.name,
        email: event.data.object.billing_details.email,
        id: event.data.object.id,
        timestamp: date.toLocaleString(),
      };
      await updateUserTokens(object.userId, newTokens);
      await createOrderDetails(orderDetails);
      console.log("success");
      break;
    case "invoice.paid":
      res.status(200).json({ message: "ok" });
      await addInvoiceToExistingOrder(
        event.data.object.payment_intent,
        event.data.object.number
      );
      break;
    default:
      res.status(200).json({ message: "ok" });
  }
}

export default cors(handler as any);
