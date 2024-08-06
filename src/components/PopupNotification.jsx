import React, { useEffect, useState } from "react";
import "../styles/PopupNotification.css";

const PopupNotification = ({ message, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(removeTimer);
    }, 1250);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        fadeOut ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="bg-green-500 text-white text-xl font-bold py-4 px-8 rounded-3xl shadow-lg transition-opacity duration-1000">
        {message}
      </div>
    </div>
  );
};

export default PopupNotification;
