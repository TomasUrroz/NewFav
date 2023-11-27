import { createAuthGuard } from './login-guard';

export const AuthGuardPlaylist = () => {
  return createAuthGuard('playlist');
};