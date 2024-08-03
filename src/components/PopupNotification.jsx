import React, { useEffect, useState } from 'react';

const PopupNotification = ({ message, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(removeTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${fadeOut ? 'animate-fade-out' : ''}`}>
      <div className="bg-green-500 text-white text-xl font-bold py-4 px-8 rounded-3xl shadow-lg">
        {message}
      </div>
    </div>
  );
};

export default PopupNotification;
