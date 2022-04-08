import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [localState, setLocalState] = useState({});

  useEffect(() => {
    const accessToken = localStorage.accessToken;
    const refreshToken = localStorage.refreshToken;
    if (accessToken && refreshToken && !localState.accessToken){
        setLocalState({accessToken, refreshToken});
    }
  }, []);

  const setToLocalState = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setLocalState({accessToken, refreshToken});
  };

  const removeLocalState = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  return [localState, setToLocalState, removeLocalState];
}
