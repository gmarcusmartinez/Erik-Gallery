import { lazy } from 'react';

export { Dashboard } from './Dashboard';
export { GalleryScreen } from './Gallery';
export { LogoutScreen } from './Logout';
export { NotFoundScreen } from './NotFound';
export { ProjectImages } from './ProjectImages';

export const BioScreen = lazy(() => import('./Bio'));
export const ContactScreen = lazy(() => import('./Contact'));
export const LandingScreen = lazy(() => import('./Landing'));
export const LoginScreen = lazy(() => import('./Login'));
export const PrintsScreen = lazy(() => import('./Prints'));
export const ProjectScreen = lazy(() => import('./Project'));
