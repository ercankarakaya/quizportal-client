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

export const svgIconUrls = {
  LOGO: 'assets/svg/logo.svg',
  LOGO2: 'assets/svg/logo2.svg',
  LOGO3: 'assets/svg/logo3.svg',
  LOGO4: 'assets/svg/logo4.svg',
  HOME: 'assets/svg/home.svg',
  USER_PROFILE: 'assets/svg/user-profile.svg',
  USER_DEFAULT: 'assets/svg/user-default.svg',
  CATEGORY: 'assets/svg/category.svg',
  CATEGORY_ADD: 'assets/svg/category-add.svg',
  QUIZ:'assets/svg/online-quiz.svg',
  QUIZ_ADD:'assets/svg/quiz-add.svg',
  ADD:'assets/svg/add.svg',
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
