"use client";
import React, { useState, useEffect } from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pb-24 mx-auto px-4 py-12">
    <div className="mx-auto max-w-5xl">
      <div className="max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Contact me
        </h1>
        <div className="mb-8 text-lg text-gray-400">
          <p className="mb-4">
            Let's work together! You can always reach out to me via any of the methods
            below:
          </p>
          <a href="https://www.linkedin.com/in/sidcraftscode" className="mb-1 block text-xl font-medium tracking-tight text-white hover:underline">
            Linkedin: sidcraftscode →
          </a>
          <a href="mailto:hi@sidcrafts.com" className="block text-xl font-medium tracking-tight text-white hover:underline">
            Email: hi@sidcrafts.com →
          </a>
          <br></br>
          <a href="https://github.com/sidcraftscode" className="font-bold text-purple-500 block text-xl font-medium tracking-tight hover:underline">
            You can also check out my GitHub profile &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>  
  );
};

export default Contact;
