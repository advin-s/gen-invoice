import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Toast = ({ type = "default", message = "", show }) => {
  const [toastType, setToastType] = useState({});
  const [display, handleDisplay] = useState(false)
  useEffect(() => {
    switch (type) {
      case "success":
        setToastType({ background: "bg-emerald-300", color: "text-emerald-700" });
        break;
      case "error":
        setToastType({ background: "bg-red-300", color: "text-red-700" });
        break;
      default:
        setToastType({ background: "bg-black", color: "text-white" });
    }
  }, [type]);

  useEffect(() => {
    console.log(show);
    if (show) {
      handleDisplay(true)
      const timeout = setTimeout(() => {
        handleDisplay(false)
      }, 3000);

      return () => clearTimeout(timeout);
    }
    else{
      handleDisplay(false)
    }
  }, [show]);

  return createPortal(
    display && (
      <div
        className={`w-56 h-10 rounded-lg fixed top-16 end-1 p-2 ${toastType.background} bg-opacity-50`}
      >
        <p className={`text-base ${toastType.color}`}>{message}</p>
      </div>
    ),
    document.getElementById("toast")
  );
};

export default Toast;
