// components/TabsSection.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FrontendSkillsSvg from "./FrontendSkillsSvg";
import MobiledevSkillsSvg from "./MobiledevSkillsSvg";
import UISkillsSvg from "./UISkillsSvg";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const tabItems = [
    { id: "frontend", label: "Frontend development" },
    { id: "appdev", label: "Mobile app development" },
    { id: "uidesign", label: "UI Design" },
  ];

  return (
    <section className="mx-auto">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-24">
        <div className="relative w-full">
          <div className="rounded-xl grid grid-cols-1 gap-2 sm:grid-cols-3">
            {tabItems.map((tab) => (
              <div
                key={tab.id}
                className={`relative p-4 text-center cursor-pointer ${
                  activeTab === tab.id ? "text-neutral-300" : "text-neutral-400 hover:text-neutral-300"
                }`}
                onClick={() => handleTabSwitch(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 border-t-purple-500 border-t-4 bg-neutral-800"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </div>
            ))}
          </div>
        </div>
        {activeTab === "frontend" && (
          <div id="frontend" className="w-full bg-neutral-800 p-4 text-neutral-300">
            <div className="py-4 text-3xl text-white font-bold tracking-tight">Frontend Development</div>
            <div className="overflow-scroll sm:overflow-auto"><FrontendSkillsSvg /></div>
            <p className="text-base">
              I have been working with frontend tools for almost 4 years now. I have worked not only with popular frameworks such as React, Next.js and Tailwind CSS but also with smaller frameworks such as Alpine.js and have even used vanilla javascript for some occasions.
            </p>
          </div>
        )}

        {activeTab === "appdev" && (
          <div id="appdev" className="w-full bg-neutral-800 p-4 text-neutral-300">
            <div className="py-4 text-3xl text-white font-bold tracking-tight">Mobile app development</div>
            <div className="overflow-scroll sm:overflow-auto"><MobiledevSkillsSvg /></div>
            <p className="text-base">
              I have recently picked up mobile app development just around 2 years ago. I have built apps for both iOS and Android, including the 11+ Vocab App which you can learn more about <u>here</u>. I used SwiftUI for the iOS app and React Native for the Android app.
            </p>
          </div>
        )}

        {activeTab === "uidesign" && (
          <div id="uidesign" className="w-full bg-neutral-800 p-4 text-neutral-300">
            <div className="py-4 text-3xl text-white font-bold tracking-tight">UI Design</div>
            <div className="overflow-scroll sm:overflow-auto"><UISkillsSvg /></div>
            <p className="text-base">
              As a frontend and mobile app developer learning to design good UI has been crucial for making my projects not only good looking but also straightforward to use. I use tools such as Figma to design my UI before implementing it into code.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
