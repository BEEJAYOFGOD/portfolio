import React from "react";
import { useState } from "react";

const SegmentedTabs = ({ tabs, defaultIndex = 0, onChange, setTab }) => {
    const [activeTab, setActiveTab] = useState(defaultIndex);

    const handleTabChange = (index) => {
        setActiveTab(index);
        onChange?.(index);
        setTab(index == 0 ? "all" : index == 1 ? "web" : "mobile");
    };

    return (
        <div className="relative  nd:w-md w-xs md:mx-auto grid h-12 auto-cols-fr mb-8 grid-flow-col rounded-lg bg-gray-100 p-1 gap-1">
            {/* Sliding indicator */}
            <div
                className="absolute top-1 bottom-1 rounded-md bg-blue-600 shadow-sm transition-all duration-300 ease-out"
                style={{
                    left: `calc(${activeTab * (100 / tabs.length)}% + 4px)`,
                    width: `calc(${100 / tabs.length}% - 8px)`,
                }}
            />

            {/* Tab buttons */}
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className={`relative z-10 grid h-full cursor-pointer place-items-center rounded-md px-4 text-sm font-medium transition-colors duration-200 capitalize ${
                        activeTab === index // Compare index to index, not index to tab name
                            ? "text-white bg-transparent" // Remove the exclamation mark and bg-blue-600
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default SegmentedTabs;
