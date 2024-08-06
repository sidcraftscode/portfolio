"use client";
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const HeroSection = () => {
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  useEffect(() => {
    // Trigger this effect when the typewriter starts
    const timer = setTimeout(() => {
      setTypewriterStarted(true);
    }, 100); // Adjust timing as necessary

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mx-auto">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 md:py-48">
        <div>
          <p className="mb-2 text-xl xs:text-2xl sm:text-3xl font-bold text-purple-500">Hi. I'm Sid</p>
          <div className="text-4xl xs:text-6xl font-bold tracking-tight text-white sm:text-8xl">
            {/* Pre-render the first string and hide it once Typewriter starts */}
            {!typewriterStarted && <span className="typewriter-preload">Frontend dev</span>}
            <Typewriter
              options={{
                strings: ['Frontend dev', 'Mobile app dev', 'UI designer'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursor: '', // Disable cursor blinking
              }}
              onInit={() => setTypewriterStarted(true)} // Hide the pre-rendered text
            />
          </div>
          <p className="pt-8 sm:text-xl font-medium text-neutral-400">
            I'm based in London and I'm a frontend developer and mobile app developer with a passion for UI design. I have been doing frontend development for over 4 years.
          </p>
          <Link href="/projects"><button className="mt-8 rounded-md bg-purple-700 w-full sm:w-auto px-6 py-3 font-medium text-purple-100 hover:bg-purple-600 hover:text-white">
            See all my projects &rarr;
          </button></Link>
          <Link href="#contact"><button className="sm:mt-8 rounded-md py-3 w-full sm:w-auto sm:pl-4 text-neutral-400 hover:text-neutral-300">
            Contact me &rarr;
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
