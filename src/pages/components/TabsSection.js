// components/TabsSection.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FrontendSkillsSvg from "./FrontendSkillsSvg";
import FrontendSkillsMobile from "./FrontendSkillsMobile";
import MobiledevSkillsSvg from "./MobiledevSkillsSvg";
import UISkillsSvg from "./UISkillsSvg";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const tabItems = [
    { id: "frontend", label: "Frontend development", mobileLabel: "Frontend dev" },
    { id: "appdev", label: "Mobile app development", mobileLabel: "Mobile dev" },
    { id: "uidesign", label: "UI Design", mobileLabel: "UI Design" },
  ];

  return (
    <section className="mx-auto">
      <div className="mx-auto flex max-w-3xl flex-col items-center pb-24">
        <div className="p-2 relative w-full">
          <div className="rounded-xl flex flex-wrap">
            {tabItems.map((tab) => (
              <div
                key={tab.id}
                className={`relative px-1 sm:px-2 py-0 text-center cursor-pointer rounded-full ${
                  activeTab === tab.id ? "text-neutral-300" : "text-neutral-400 hover:text-neutral-300"
                }`}
                onClick={() => handleTabSwitch(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-neutral-800 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="hidden sm:inline-block relative z-10 px-4 py-2">{tab.label}</span>
                <span className="inline-block text-sm sm:hidden relative z-10 px-4 py-2">{tab.mobileLabel}</span>

              </div>
            ))}
          </div>
        </div>
        <div class="p-4">
        {activeTab === "frontend" && (
          <div id="frontend" className="w-full overflow-scroll text-neutral-300">
            <div className="py-4 text-3xl text-white font-bold overflow-scroll tracking-tight">Frontend Development</div>
            <div className="sm:block hidden"><FrontendSkillsSvg/></div>
            <div className="sm:hidden block"><FrontendSkillsMobile/></div>

            <p className="mt-4 text-base">
              I have been working with frontend tools for almost 4 years now. I have worked not only with popular frameworks such as React, Next.js and Tailwind CSS but also with smaller frameworks such as Alpine.js and have even used vanilla javascript for some occasions.
            </p>
          </div>
        )}

        {activeTab === "appdev" && (
          <div id="appdev" className="w-full text-neutral-300">
            <div className="py-4 text-3xl text-white font-bold tracking-tight">Mobile app development</div>
            <div><MobiledevSkillsSvg /></div>
            <p className="mt-4 text-base">
              I have recently picked up mobile app development just around 2 years ago. I have built apps for both iOS and Android, including the 11+ Vocab App which you can learn more about <u>here</u>. I used SwiftUI for the iOS app and React Native for the Android app.
            </p>
          </div>
        )}

        {activeTab === "uidesign" && (
          <div id="uidesign" className="w-full text-neutral-300">
            <div className="py-4 text-3xl text-white font-bold tracking-tight">UI Design</div>
            <div><UISkillsSvg /></div>
            <p className="mt-4 text-base">
              As a frontend and mobile app developer learning to design good UI has been crucial for making my projects not only good looking but also straightforward to use. I use tools such as Figma to design my UI before implementing it into code.
            </p>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
