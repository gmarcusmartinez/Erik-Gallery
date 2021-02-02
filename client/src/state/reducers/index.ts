import { combineReducers } from 'redux';
import { auth } from './auth';
import { backgrounds } from './backgrounds';
import { lightbox } from './lightbox';
import { modal } from './modal';
import { nav } from './nav';
import { prints } from './prints';
import { projects } from './projects';
import { orders } from './orders';
import { zines } from './zines';

export const rootReducer = combineReducers({
  auth,
  backgrounds,
  lightbox,
  modal,
  nav,
  orders,
  prints,
  projects,
  zines,
});

export type RootState = ReturnType<typeof rootReducer>;
