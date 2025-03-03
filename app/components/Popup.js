
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div>
      <div>
        <h2>Pop-up Content</h2>
        <p>This is a dynamically imported pop-up!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
