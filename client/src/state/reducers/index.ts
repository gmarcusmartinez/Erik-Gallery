import { combineReducers } from 'redux';
import { auth } from './auth';
import { backgrounds } from './backgrounds';
import { lightbox } from './lightbox';
import { modal } from './modal';
import { nav } from './nav';
import { prints } from './prints';
import { projects } from './projects';
import { zines } from './zines';

export const rootReducer = combineReducers({
  auth,
  backgrounds,
  lightbox,
  modal,
  nav,
  prints,
  projects,
  zines,
});

export type RootState = ReturnType<typeof rootReducer>;
