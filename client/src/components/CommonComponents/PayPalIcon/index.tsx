import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as PayPalSVG } from "assets/pay-pal.svg";

interface IProps {}

const PayPalIcon: React.FC<IProps> = () => {
  return <PayPalSVG className="pay-pal-icon" />;
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, {})(PayPalIcon);
