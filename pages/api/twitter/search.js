import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
export default async (req, res) => {
  const session = await getSession({ req });
  const token = await getToken({
    req,
    secret: "mySecretValue",
  });
  console.log("session", session);
  console.log("token", token);
  try {
    return res.status(200).json({
      status: "Ok",
      data: [],
    });
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    });
  }
};
