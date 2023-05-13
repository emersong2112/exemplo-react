import React, { useEffect, useState } from 'react';
import TimelineStep from './TimelineStep';
import './style.scss';
const Timeline = ({ steps, updateLine }) => {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(true);
    console.log('updateLine', updateLine);
    setTimeout(() => {
      setReload(false);
      console.log('updateLine', updateLine);
    }, 100);
  }, [updateLine]);

  return (
    <div
      className={`timeline ${reload ? 'no-animation' : 'animate'}`}
      style={{ '--w-item': `${(1 / steps.length) * 100}%` }}
    >
      <div className="steps">
        {steps.map((step, index) => (
          <TimelineStep
            key={index}
            count={index + 1}
            isSelected={index === 0}
            isLast={index === steps.length - 1}
            label={step.label}
          />
        ))}
      </div>
      <div className="line" />
    </div>
  );
};

export default Timeline;
