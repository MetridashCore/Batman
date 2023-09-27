import axios from "axios";
function resultStringToArray(result: string): string[] {
  let textArray: string[] = [];
  const arrayLines = result.split("\n\n");

  for (const line of arrayLines) {
    if (line == "") {
      continue;
    }
    const regex = /^\d+\.\s/gm;
    const removedNumber = line.replace(regex, "");
    //   const splitText = removeNumber.split(":");;
    textArray.push(removedNumber);
  }
  return textArray;
}

async function getUserCountry() {
  try {
    const response = await axios.get("https://api.ipify.org/?format=json");
    console.log(response.data);
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }
}
const getIP = async () => {
  try {
    const res = await fetch("https://api-bdc.net/data/client-ip");
    const ip = await res.json();
    console.log(ip);
    return ip.ipString;
  } catch (error) {
    console.log("error fetching ip", error);
  }
};

export { resultStringToArray, getUserCountry, getIP };
