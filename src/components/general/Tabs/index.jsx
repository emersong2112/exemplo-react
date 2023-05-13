import React from 'react';
import './style.scss';

const Tabs = ({ setCurrentTab, tabList, currentTab }) => {
  return (
    <div className="tab-selector">
      {tabList.map((tab, index) => (
        <span
          className={`tab-item ${currentTab === index ? 'active' : ''}`}
          key={index}
          onClick={() => setCurrentTab(index)}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
