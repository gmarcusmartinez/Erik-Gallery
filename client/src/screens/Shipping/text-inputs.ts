export const blankFormState = {
  email: "",
  name: "",
  address: "",
  country: "",
  city: "",
  postalCode: "",
};
export const testFormState = {
  email: "test@test.com",
  name: "Marcus Martinez",
  address: "195 Surf St",
  country: "United States",
  city: "Pacfica",
  postalCode: "12345",
};

export const textInputs = [
  {
    label: "Email",
    name: "email",
    value: "email",
    errorField: "email",
  },
  {
    label: "Name",
    name: "name",
    value: "name",
    errorField: "name",
  },

  {
    label: "Address",
    name: "address",
    value: "address",
    errorField: "address",
  },
  {
    label: "City",
    name: "city",
    value: "city",
    errorField: "city",
  },
  {
    label: "Country",
    name: "country",
    value: "country",
    errorField: "country",
  },
  {
    label: "Postal Code",
    name: "postalCode",
    value: "postalCode",
    errorField: "postalCode",
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
