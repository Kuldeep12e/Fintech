import React, { useState, useEffect } from "react";
import { servicesData } from "../constants";
import StackCard from "./StackCard";
import style from "../style";

export default function StackScrollSection() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  const activeService = servicesData.find(s => s.id === activeServiceId);

  const [activeSubTabId, setActiveSubTabId] = useState(activeService.subTabs[0].id);

  useEffect(() => {
    if (!activeService.subTabs.find(t => t.id === activeSubTabId)) {
      setActiveSubTabId(activeService.subTabs[0].id);
    }
  }, [activeServiceId]);

  const activeSubTab =
    activeService.subTabs.find(t => t.id === activeSubTabId) ||
    activeService.subTabs[0];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={style.heading2}>
          Power Your Business
        </h2>

        
        <div className="flex flex-wrap gap-3 mb-6">
          {servicesData.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveServiceId(s.id)}
              className={
                "px-4 py-2 rounded-full border text-sm " +
                (activeServiceId === s.id
                  ? "bg-secondary text-white border-secondary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50")
              }
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Sub Tabs */}
        <div className="flex gap-2 border-b pb-3 mb-4 overflow-x-auto">
          {activeService.subTabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveSubTabId(t.id)}
              className={
                "px-3 py-1.5 rounded-full text-sm " +
                (activeSubTabId === t.id
                  ? "bg-blue-100 text-secondary"
                  : "text-gray-600 hover:bg-gray-100")
              }
            >
              {t.title}
            </button>
          ))}
        </div>
    

       
      </div>

      
      <div className="mt-35 sm:mt-40 lg:mt-10 md:mt-20 grid grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
">
        {activeSubTab.cards.map((card, index) => (
          <StackCard key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
