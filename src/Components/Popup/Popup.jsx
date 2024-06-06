import React from "react";

export default function Popup({ orderPopup, setOrderPopup }) {
  return (
    <>
      {1 && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm"></div>
        </div>
      )}
    </>
  );
}
