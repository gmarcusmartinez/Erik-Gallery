export const blankFormState = {
  description: "",
  size: "(35 x 50 cm)",
  price: "0.00",
  quantityInStock: 0,
  isPublished: false,
  mainImage: null,
};

export const textInputs = [
  {
    label: "Description",
    name: "description",
    value: "description",
    errorField: "description",
  },
  {
    label: "Size",
    name: "size",
    value: "size",
    errorField: "size",
  },
  {
    label: "Price",
    name: "price",
    value: "price",
    errorField: "price",
  },
  {
    label: "Quantity In Stock",
    name: "quantityInStock",
    value: "quantityInStock",
    errorField: "quantityInStock",
  },
];
