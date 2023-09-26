import { Iorder } from "@/interface/OrderInterface";
import { db } from "./confing";

const user_collection = db.collection("users");
const customer_collection = db.collection("customers");

export async function getUserTokens(userId: string) {
  try {
    const userTokens = await user_collection.doc(userId).get();
    return userTokens.data()?.tokens;
  } catch (error) {
    throw error;
  }
}
export async function updateUserTokens(userId: string, tokens: number) {
  try {
    const user = user_collection.doc(userId);
    await user.update({
      tokens: tokens,
    });
  } catch (error) {
    throw error;
  }
}

export async function createOrderDetails(details: Iorder) {
  try {
    await customer_collection.add(details);
  } catch (error) {
    throw error;
  }
}
export async function addInvoiceToExistingOrder(
  paymentIntent: string,
  invoiceNumber: string
) {
  try {
    const query = customer_collection.where(
      "paymentIntent",
      "==",
      paymentIntent
    );
    const doc = await query.get();
    doc.forEach((order) => {
      order.ref.update({
        invoice: invoiceNumber,
      });
    });
  } catch (error) {
    throw error;
  }
}
