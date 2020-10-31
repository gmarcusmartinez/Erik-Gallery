import { createSelector } from "reselect";

const selectAuth = (state: any) => state.auth;

export const selectErrors = createSelector([selectAuth], (auth) => auth.errors);
