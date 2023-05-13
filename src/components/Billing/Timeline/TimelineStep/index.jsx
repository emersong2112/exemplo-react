import React from 'react';

const TimelineStep = ({ count, isSelected = false, label }) => {
  return (
    <figure
      className={isSelected ? 'selected' : ''}
      style={{ '--delay': `${count / 5}s` }}
    >
      <span>{count}</span>
      <figcaption>
        <span>{label}</span>
      </figcaption>
    </figure>
  );
};

export default TimelineStep;
