import { createAuthGuard } from './login-guard';

export const AuthGuardAbout = () => {
  return createAuthGuard('about');
};