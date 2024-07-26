import { useEffect, useRef } from "react";

const useInactivityLogout = (timeout: number, onLogout: () => void) => {
  const timerRef = useRef<number>();

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(onLogout, timeout);
    };

    const handleActivity = () => resetTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("click", handleActivity);

    resetTimer();

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, [timeout, onLogout]);

  return null;
};

export default useInactivityLogout;
