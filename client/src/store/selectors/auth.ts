import { createSelector } from "reselect";

//@ts-ignore
const selectAuth = (state) => state.auth;

export const selectAuthErrors = createSelector(
  [selectAuth],
  (auth) => auth.errors
);
