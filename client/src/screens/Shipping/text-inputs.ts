export const defaultFormState = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  country: "",
  city: "",
  postalCode: "",
};
export const testFormState = {
  email: "test@test.com",
  firstName: "Marcus",
  lastName: "Martinez",
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
    label: "First Name",
    name: "firstName",
    value: "firstName",
    errorField: "firstName",
  },
  {
    label: "Last Name",
    name: "lastName",
    value: "lastName",
    errorField: "lastName",
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
