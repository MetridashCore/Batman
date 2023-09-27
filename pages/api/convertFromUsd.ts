// @ts-nocheck
import axios from "axios";
import { count } from "console";

const handler = async (req: Request, res: Response) => {
  const positionstack_key = process.env.POSITIONSTACK_KEY;
  const apiKey = process.env.EXCHANGEKEY;
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (Array.isArray(ip)) {
    ip = ip[0];
  }
  console.log(ip, positionstack_key, apiKey);
  const country = await axios.get("http://api.positionstack.com/v1/reverse", {
    params: {
      access_key: positionstack_key,
      query: ip,
      country_module: 1,
    },
  });
  const response = await axios.get(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`,
    {
      params: {
        base_currency: "USD",
        currencies: country.data.country_module.currencies[0].code,
      },
    }
  );
  const rate = Math.ceil(Object.values(response.data.data)[0]);
  return res.status(200).json({
    rate: rate,
    countryCode: country.data.country_module.currencies[0].code,
  });
};
export default handler;
