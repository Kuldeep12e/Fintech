
import React from "react";

const SubTabs = ({ tabs, active, setActive }) => {
  return (
    <div className="mt-4">
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all
              ${active === tab.id ? "bg-white text-black shadow-md" : "text-white/80 bg-white/5 hover:bg-white/10"}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubTabs;
