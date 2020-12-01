export const defaultFormState = {
  country: "",
  city: "",
  postalCode: "",
  address: "",
};

export const textInputs = [
  {
    label: "Country",
    name: "country",
    value: "country",
    errorField: "country",
  },
  {
    label: "City",
    name: "city",
    value: "city",
    errorField: "city",
  },
  {
    label: "Postal Code",
    name: "postalCode",
    value: "postalCode",
    errorField: "postalCode",
  },
  {
    label: "Address",
    name: "address",
    value: "address",
    errorField: "address",
  },
];

export const errors = [
  {
    field: "country",
    message: "Country is Required",
  },
  {
    field: "city",
    message: "City is Required",
  },
  {
    field: "postalCode",
    message: "Postal Code is Required",
  },

  {
    field: "address",
    message: "Address is Required",
  },
];
