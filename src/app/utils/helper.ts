export const BASE_API_URL = 'http://localhost:8181/api';

export const keys = {
  TOKEN_KEY: 'auth-token',
  USER_KEY: 'auth-user',
  TOKEN_HEADER_KEY: 'Authorization',
  AUTHORITIES_KEY:'auth-authorities'
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
