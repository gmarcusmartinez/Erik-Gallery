import axios from "axios";

const addPayPalScript = async (cb: Function) => {
  const { data: clientID } = await axios.get("/api/config/paypal");
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}&currency=EUR`;
  script.async = true;
  script.onload = () => cb(true);
  return document.body.appendChild(script);
};
export default addPayPalScript;
