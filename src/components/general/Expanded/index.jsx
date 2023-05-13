import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './style.scss';
const Expanded = ({ title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="expanded" onClick={() => setIsOpen(!isOpen)}>
      <div className="closed-captions">
        <div className="circle" />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {isOpen ? (
          <MdKeyboardArrowUp color="#70707080" size={20} />
        ) : (
          <MdKeyboardArrowDown color="#70707080" size={20} />
        )}
      </div>
      {isOpen && <div className="hide-content">{children}</div>}
    </article>
  );
};

export default Expanded;
