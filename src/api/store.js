export const getStoredToken = () => {
  try {
    return localStorage.getItem("accessToken");
  } catch (error) {
    console.error("Failed to get stored token:", error);
    return null;
  }
};

export const setStoreToken = (token) => {
  try {
    return localStorage.setItem("accessToken", token);
  } catch (error) {
    console.error("Failed to store token:", error);
  }
};

export const clearStoreToken = () => {
  try {
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.error("Failed to clear tokens:", error);
  }
};
