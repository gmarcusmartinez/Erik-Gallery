import React from "react";

const dashPrintHeaders = [
  { text: "Image", className: "" },
  { text: "Desc", className: "tablet-header" },
  { text: "Size", className: "tablet-header" },
  { text: "Price", className: "tablet-header" },
  { text: "In Stock", className: "tablet-header" },
  { text: "Edit", className: "" },
  { text: "Delete", className: "" },
];

export const renderHeaders = () =>
  dashPrintHeaders.map((h, i) => (
    <div key={i} className={h.className}>
      {h.text}
    </div>
  ));
