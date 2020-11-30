import { createSelector } from "reselect";

const selectNav = (state: any) => state.nav;

export const selectNavIsOpen = createSelector([selectNav], (nav) => nav.isOpen);
