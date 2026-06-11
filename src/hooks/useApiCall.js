import { getStoredToken } from "../api/store";
import API_URL from "../api/baseUrl";
import { useAuth } from "../app/AuthProvider";

const useApiCall = (isSecure = true) => {
  const { removeTokenFromContext } = useAuth();

  const apiCall = async ({ endpoint, method = "GET", data = null }) => {
    try {
      let token = await getStoredToken();
      const headers = {
        "Content-Type": "application/json",
        ...(isSecure && { Authorization: `Bearer ${token}` }),
      };

      const config = {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
      };

      let response = await fetch(`${API_URL}${endpoint}`, config);

      if (!response.ok) {
        removeTokenFromContext();
        throw new Error("Request failed");
      }

      return await response.json();
    } catch (error) {
      removeTokenFromContext();
      console.error("API call failed:", error);
      throw error;
    }
  };

  return apiCall;
};

export default useApiCall;
