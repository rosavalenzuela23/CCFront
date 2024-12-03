import { CanActivateFn } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { inject } from '@angular/core';
import { SessionStorageNames } from '../services/sessionStorageNames';


export const authGuard: CanActivateFn = (route, state) => {
  
  const token = sessionStorage.getItem(SessionStorageNames.TOKEN);

  if (!token) {
    return true;
  }
  return false;
};

