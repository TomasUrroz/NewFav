import { createAuthGuard } from './login-guard';

export const AuthGuardNewPlaylist = () => {
  return createAuthGuard('new-playlist');
};