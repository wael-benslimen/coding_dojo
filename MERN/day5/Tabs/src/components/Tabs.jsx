import React from 'react';
import { useState } from 'react';

const Tabs = () => {
  const [selected, setSelected] = useState('tab1'); 
  const allTabs = [
    { title: 'tab1', content: 'Tab 1 Content' },
    { title: 'tab2', content: 'Tab 2 Content' },
    { title: 'tab3', content: 'Tab 3 Content' }, 
  ];

  const handleTabChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="container mx-auto flex items-center flex-col">
      <div className="flex gap-5 mt-5">
        {allTabs.map((t, index) => (
          <button
            key={index}
            className={`text-2xl font-bold border p-2 ${selected === t.title ? 'bg-blue-500 text-white' : ''}`} 
            value={t.title}
            onClick={handleTabChange}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div className="mt-5 p-4 border rounded-md">
        {allTabs.find((tab) => tab.title === selected)?.content}
      </div>
    </div>
  );
};

export default Tabs;

