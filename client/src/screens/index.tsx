import { lazy } from 'react';

export { ContactScreen } from './Contact';
export { Dashboard } from './Dashboard';
export { GalleryScreen } from './Gallery';
export { LoginScreen } from './Login';
export { LogoutScreen } from './Logout';
export { NotFoundScreen } from './NotFound';
export { ProjectImages } from './ProjectImages';

export const BioScreen = lazy(() => import('./Bio'));
export const LandingScreen = lazy(() => import('./Landing'));
export const PrintsScreen = lazy(() => import('./Prints'));
export const ProjectScreen = lazy(() => import('./Project'));
