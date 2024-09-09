interface AuthState {
  user: any;
  token: any;
  isLoading: boolean;
  error: string | "";
  isAuthenticated: boolean;
  role: any;
}
const TOKEN_KEY = "token";
const USER_KEY = "user";
const EXPIRY_KEY = "expiry";

export const saveSession = (token: string, user: AuthState, expiry: number) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  sessionStorage.setItem(EXPIRY_KEY, expiry.toString());
};

export const clearSession = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(EXPIRY_KEY);
};

export const getSessionToken = (): string | null => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const expiry = sessionStorage.getItem(EXPIRY_KEY);

  if (token && expiry) {
    const expiryTime = parseInt(expiry, 10);
    if (Date.now() > expiryTime) {
      clearSession(); // Clear expired session
      return null;
    }
    return token;
  }
  return null;
};

export const getSessionUser = (): AuthState | null => {
  const userStr = sessionStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};
