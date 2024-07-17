export const PublicRoutes = {
  LOGIN: 'login',
  SIGNUP: 'signup',
};

export const PrivateRoutesGuest = {
  GUEST: 'guest',
  OTP: 'otp',
  CHANGEPASSWORD: 'changepassword',
  CONGRATULATIONS: 'congratulations',
  SORRY: 'sorry',
  MESSAGECHANGEPASSWORD: 'messagechangepassword',
};

export const PrivateRoutesUser = {
  DASHBOARD_CRM: '',
  ACCOUNTS_BY_STATUS: 'accounts/:status',
  ASSESSMENT_END_VIEW_1: 'assessmentend',
  ASSESSMENT_END_VIEW_2: 'assessmentend2',
  ASSESSMENT_VIEW_2: 'assessment2',

  HOME: 'home',
  USER: 'user',
};

export const PrivateRoutesAdmin = {
  AUTH: 'auth',
  ADMIN: 'admin',
};
