import { createSelector } from "reselect";

const selectAuth = (state: any) => state.auth;

export const selectAuthErrors = createSelector(
  [selectAuth],
  (auth) => auth.errors
);
