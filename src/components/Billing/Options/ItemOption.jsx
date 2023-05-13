import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineToggleOff, MdOutlineToggleOn } from 'react-icons/md';

const ItemOption = ({ title, description, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => {
    const toggleElement = toggleRef.current;
    if (toggleElement) {
      // Adiciona a classe .toggle-click após 200ms
      toggleElement.classList.add('toggle-click');
      setTimeout(() => {
        // Remove a classe .toggle-click após 400ms
        toggleElement.classList.remove('toggle-click');
      }, 400);
    }
  }, [isActive]);
  const handleToggle = () => {
    if (onChange) {
      onChange(!isActive);
    }
    setIsActive(!isActive);
  };
  return (
    <li className="item-option" onClick={handleToggle}>
      <h3>{title}</h3>
      <div ref={toggleRef}>
        {isActive ? (
          <MdOutlineToggleOn color="#00CDA8" size={35} />
        ) : (
          <MdOutlineToggleOff color="#EA5462" size={35} />
        )}
      </div>
      <p>{description}</p>
    </li>
  );
};

export default ItemOption;
