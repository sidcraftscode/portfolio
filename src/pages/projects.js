"use client"; // Ensure this directive is at the top

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-neutral-800 rounded-2xl w-full max-w-4xl h-auto max-h-[85vh] overflow-y-auto"
            initial={{ y: '100vh' }}
            animate={{ y: '50vh', translateY: '-50%' }}
            exit={{ y: '100vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content */}
            <div className="p-6 pt-2">
              <h2 className="text-2xl py-4 sm:text-4xl font-bold tracking-tight">{content.title}</h2>
              <div className="flex flex-col sm:flex-row">
                <img 
                  src={content.image} 
                  alt="Project" 
                  className="mx-auto max-w-sm rounded-xl w-full h-auto object-cover mb-4"
                />
                <div className="text-gray-400 mt-4 max-w-sm sm:max-w-none mx-auto sm:pl-4">
                  <p>{content.description} <br /><br />
                    {content.link && (
                      <a 
                        href={content.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium tracking-tight hover:underline pt-4 text-white text-xl"
                      >
                        View Project &rarr;
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { 
      image: "epv.png", 
      title: 'Eleven Plus Vocab', 
      description: 'I designed and developed this landing page for Eleven Plus Vocab, a family business. The page was built using vanilla HTML, CSS, and JavaScript, as it was a straightforward landing page without complex features.',
      link: 'https://elevenplusvocab.com'
    },
    { 
      image: "epvapp.png", 
      title: '11+ Vocab App', 
      description: 'At 11+ Vocab, we decided to convert some of our best-selling books into an app format, allowing users to take practice quizzes digitally and receive instant feedback for exam preparation. I used SwiftUI for the iOS app and React Native for the Android app.',
      link: 'https://apps.apple.com/gb/app/11-vocab/id6505115340'
    },
    { 
      image: "smurfs.png", 
      title: 'Naomi Murphy\'s Website', 
      description: 'I designed and developed a landing page for Naomi Murphy to promote her services as a singing coach. This site was built using vanilla HTML, CSS, and JavaScript, similar to the Eleven Plus Vocab website.',
      link: 'https://naomimurphy.vercel.app'
    },
    { 
      image: "weatherapp.png", 
      title: 'React Weather App', 
      description: 'I created a weather app using React, featuring various functionalities such as the ability to search for and view weather data for multiple cities. The selected cities are saved using local storage, and weather data is sourced from the OpenWeatherMap API.',
      link: 'https://github.com/sidcraftscode/react-weather-app'
    },
    { 
      image: "todoapp.png", 
      title: 'React To-Do List App', 
      description: 'I created a todo-list app using React, featuring various functionalities such as the ability to create, update and delete tasks. The user\'s tasks persist using local storage, and the UI is styled with Tailwind CSS.',
      link: 'https://github.com/sidcraftscode/react-todo-list-app'
    },
    { 
      image: "browser.png", 
      title: 'Private Browser', 
      description: 'I created a private browser for iOS devices inspired by Firefox Focus in Swift using UIKit. Features include/will include clearing all data with one tap, ability to choose search engine (soon) and ability to disable javascript (soon) and basic ad blocking (soon).',
      link: 'https://github.com/sidcraftscode/private-browser'
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-white mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
       <Link href="/"><p className="mb-2 text-xl hover:text-white hover:underline font-semibold text-gray-400 ">&larr; Back to home page</p></Link>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8">Projects</h1>
          <p className="text-lg text-gray-400 mb-8">Here is a list of some of my best projects, built with a variety of technologies ranging from React to SwiftUI.</p>
        </div>
        <div className="brightness-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden cursor-pointer"
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-66 object-cover"
              />              
            </motion.div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={selectedProject} />
    </section>
  );
};

export default Projects;