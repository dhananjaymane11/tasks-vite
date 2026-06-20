import { getStoredToken } from "../api/store";
import API_URL from "../api/baseUrl";
import { useError } from "../contexts/error";

const useApiCall = (isSecure = true) => {
  const { showErrorPopup } = useError();

  const apiCall = async ({ endpoint, method = "GET", data = null }) => {
    try {
      const token = getStoredToken();

      if (isSecure && !token) {
        throw new Error("Invalid token");
      }

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
        throw new Error("Request failed");
      }

      return await response.json();
    } catch {
      showErrorPopup(true);
    }
  };

  return apiCall;
};

export default useApiCall;
