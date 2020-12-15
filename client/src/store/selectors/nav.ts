import { createSelector } from "reselect";

//@ts-ignore
const selectNav = (state) => state.nav;

export const selectNavIsOpen = createSelector([selectNav], (nav) => nav.isOpen);
