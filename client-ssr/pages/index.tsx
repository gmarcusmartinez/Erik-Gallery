import axios from "axios";
import buildClient from "api/buildClient";
import MainLayout from "../layouts/MainLayout";

const Landing = ({ currentUser }) => {
  // console.log(currentUser);
  return <div></div>;
};

Landing.Layout = MainLayout;

Landing.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/auth/currentuser");

  return data;
};

export default Landing;
