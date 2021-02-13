export const printBlankFormState = {
  description: '',
  size: '(35 x 50 cm)',
  quantityInStock: 0,
  isPublished: false,
  isAvailable: false,
};

export const printTextInputs = [
  {
    label: 'Size',
    name: 'size',
    value: 'size',
    errorField: 'size',
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
