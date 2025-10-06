import { Dashboard, Profile } from '@/screens';
import { Paths } from './paths';

const Private = [
  {
    name: Paths.Dashboard,
    component: Dashboard,
    options: { headerTransparent: true },
  },
  {
    name: Paths.Profile,
    component: Profile,
    options: { headerTransparent: true },
  },
];

export default Private;
