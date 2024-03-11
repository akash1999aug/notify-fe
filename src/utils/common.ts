export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const LAST_ACTIVE = "lastActive";
export const EXPIRY_TIME = 1000 * 60;
export const SESSION_WATCH_TIME = 10 * 1000;

export const userSessionActive = (value: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem(ACCESS_TOKEN, value.accessToken);
  localStorage.setItem(REFRESH_TOKEN, value.refreshToken);
  localStorage.setItem(LAST_ACTIVE, new Date().toISOString());
};
export const userSessionInactive = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(LAST_ACTIVE);
};
