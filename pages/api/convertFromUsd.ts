// @ts-nocheck
import axios from "axios";
const handler = async (req: Request, res: Response) => {
  const positionstack_key = process.env.POSITIONSTACK_KEY;
  const apiKey = process.env.EXCHANGEKEY;
  const { ip } = req.body;
  const country = await axios.get("http://api.positionstack.com/v1/reverse", {
    params: {
      access_key: positionstack_key,
      query: ip,
      country_module: "1",
    },
  });
  const countryCode = country.data.data[0].country_module.currencies[0].code;
  const response = await axios.get(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`,
    {
      params: {
        base_currency: "USD",
        currencies: countryCode,
      },
    }
  );
  const rate = Math.ceil(Object.values(response.data.data)[0]);
  console.log(countryCode);
  return res.status(200).json({
    rate: rate,
    countryCode: countryCode,
  });
};
export default handler;
