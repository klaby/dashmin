/**
 * Manage your authentication methods
 */

// Token
export const TOKEN_KEY = "@dashmin";

// Is isAuthenticated
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

// Get Token
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

// Login
export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

// Logout
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};