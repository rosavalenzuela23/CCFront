import { CanActivateFn } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { inject } from '@angular/core';
import { SessionStorageNames } from '../services/sessionStorageNames';


export const roleGuard: CanActivateFn = (route, state) => {
  
  if(sessionStorage.getItem(SessionStorageNames.TOKEN) === route.data['rol']){
    console.log("si entrooo al iifff si tienes permisoooss")
    return true;
  }
  return false;
};
