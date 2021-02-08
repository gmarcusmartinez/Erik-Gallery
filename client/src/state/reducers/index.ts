import { combineReducers } from 'redux';
import { auth } from './auth';
import { backgrounds } from './backgrounds';
import { bio } from './bio';
import { lightbox } from './lightbox';
import { modal } from './modal';
import { nav } from './nav';
import { prints } from './prints';
import { projects } from './projects';

export const rootReducer = combineReducers({
  auth,
  backgrounds,
  bio,
  lightbox,
  modal,
  nav,
  prints,
  projects,
});

export type RootState = ReturnType<typeof rootReducer>;
