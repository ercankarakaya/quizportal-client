import { IconOptions } from "@angular/material/icon";
import { SafeResourceUrl } from "@angular/platform-browser";

export const BASE_API_URL = 'http://localhost:8181/api';

export const keys = {
  TOKEN_KEY: 'auth-token',
  USER_KEY: 'auth-user',
  USERNAME_KEY: 'auth-username',
  TOKEN_HEADER_KEY: 'Authorization',
  AUTHORITIES_KEY: 'auth-authorities',
};

export const roles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};

export function test() {
  return null;
}

export const helpers = {
  doSomething(val: string) {
    return val;
  },

  doSomethingElse(val: string) {
    return val;
  },
};
