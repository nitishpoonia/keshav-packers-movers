"use client";

import { useState } from "react";

export default function StateCityList({ statesAndCities }) {
  const [expandedState, setExpandedState] = useState(null);

  const toggleState = (state) => {
    setExpandedState(expandedState === state ? null : state);
  };

  return (
    <div className="mt-6">
      {Object.keys(statesAndCities).map((state) => (
        <div key={state} className="border-b border-gray-600">
          <button
            onClick={() => toggleState(state)}
            className="w-full text-left py-2 text-[16px] sm:text-[18px] font-poppins font-poppinsRegular text-primary hover:text-gray-300 focus:outline-none"
          >
            {state}
            <span className="float-right">
              {expandedState === state ? "−" : "+"}
            </span>
          </button>
          {expandedState === state && (
            <div className="py-2">
              <ul className="flex flex-wrap gap-2">
                {statesAndCities[state].map((city) => (
                  <li
                    key={city}
                    className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-gray-300"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
