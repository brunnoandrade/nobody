import { Initial, SignIn, SignUp } from '@/screens';
import { Paths } from './paths';

const Public = [
  {
    name: Paths.Initial,
    component: Initial,
    options: { headerTransparent: true },
  },
  {
    name: Paths.SignIn,
    component: SignIn,
    options: { headerTransparent: true },
  },
  {
    name: Paths.SignUp,
    component: SignUp,
    options: { headerTransparent: true },
  },
];

export default Public;
