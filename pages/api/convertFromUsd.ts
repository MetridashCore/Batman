// @ts-nocheck
import axios from "axios";

const handler = async (req: Request, res: Response) => {
  const apiKey = process.env.EXCHANGEKEY;
  // const { price, to } = (await req.json()) as { price: string; to: string };
  // const { price, to } = (await req.json()) as {
  //   price: string;
  //   to: string;
  // };
  const { price, to } = req.body;
  const response = await axios.get(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`,
    {
      params: {
        base_currency: "USD",
        currencies: to,
      },
    }
  );

  const rate = Math.ceil(Object.values(response.data.data)[0]);

  return res.status(200).json({ rate: rate });
};

export default handler;
