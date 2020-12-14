import { ICartItem } from "../interfaces";

export const addItemToCart = (cartItems: ICartItem[], itemToAdd: ICartItem) => {
  const existingCartItem = findCartItem(cartItems, itemToAdd);
  if (existingCartItem) return setItemQty(cartItems, itemToAdd);

  return [...cartItems, { ...itemToAdd }];
};

export const removeItemFromCart = (
  cartItems: ICartItem[],
  itemToRemove: ICartItem
) => {
  const existingCartItem = findCartItem(cartItems, itemToRemove);

  if (existingCartItem!.quantity === 1)
    return clearItemFromCart(cartItems, itemToRemove);

  return decreaseItemCount(cartItems, itemToRemove);
};

const findCartItem = (cartItems: ICartItem[], item: ICartItem) =>
  cartItems.find(({ _id }) => _id === item._id);

const setItemQty = (cartItems: ICartItem[], itemToAdd: ICartItem) =>
  cartItems.map((item) =>
    item._id === itemToAdd._id
      ? { ...item, quantity: itemToAdd.quantity }
      : item
  );

const decreaseItemCount = (cartItems: ICartItem[], itemToRemove: ICartItem) =>
  cartItems.map((item) =>
    item._id === itemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

const clearItemFromCart = (cartItems: ICartItem[], itemToRemove: ICartItem) =>
  cartItems.filter(({ _id }) => _id !== itemToRemove._id);

export const calculateTotal = (cartItems: ICartItem[]) =>
  cartItems.reduce((acc, curr) => acc + curr.quantity * +curr.price, 0);

export const sortItems = (items: ICartItem[], order: string) =>
  order === "ascending"
    ? [...items.sort((a, b) => +a.price - +b.price)]
    : [...items.sort((a, b) => +b.price - +a.price)];

export const mapQuantityToOptions = (n: number) => {
  const opts = [];
  for (let i = 1; i <= n; i++) opts.push(i);
  return opts;
};

export const toTwoDecimals = (num: number) => {
  return num.toFixed(2);
};
