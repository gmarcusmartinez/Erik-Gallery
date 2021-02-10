export const printBlankFormState = {
  description: '',
  size: '(35 x 50 cm)',
  price: '0.00',
  quantityInStock: 0,
  isPublished: false,
  mainImage: null,
};

export const printTextInputs = [
  {
    label: 'Size',
    name: 'size',
    value: 'size',
    errorField: 'size',
  },
  {
    label: 'Quantity In Stock',
    name: 'quantityInStock',
    value: 'quantityInStock',
    errorField: 'quantityInStock',
  },
];

export const projectBlankFormState = {
  title: '',
  description: '',
  medium: '',
  mainImage: null,
  isPublished: false,
};

export const projectTextInputs = [
  {
    label: 'Title',
    name: 'title',
    value: 'title',
    errorField: 'title',
  },
  {
    label: 'Medium',
    name: 'medium',
    value: 'medium',
    errorField: 'medium',
  },
];
