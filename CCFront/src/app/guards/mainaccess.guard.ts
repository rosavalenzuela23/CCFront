import { CanActivateFn } from '@angular/router';
import { SessionStorageNames } from '../services/sessionStorageNames';


export const mainAccessGuard: CanActivateFn = (route, state) => {
  
  const token = sessionStorage.getItem(SessionStorageNames.TOKEN);

  if (token) {
    return true;
  }
  return false;
};
