'use client';

import Link from 'next/link';

import { FaRocket, FaTasks, FaShieldAlt, FaArrowRight, FaSyncAlt } from 'react-icons/fa'; // Added FaSyncAlt

import { useEffect, useState } from 'react';



export default function Home() {

  const [loaded, setLoaded] = useState(false);



  useEffect(() => {

    setLoaded(true); // Trigger animations on mount

  }, []);



  return (

    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden text-foreground">

      {/* Main Content Card - Frosted Glass Effect */}

      <div className={`relative z-10 text-center max-w-5xl w-full modern-card p-12 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} >

        

                {/* Hero Section */}

        

                <div className="mb-16">

        

                  <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-extrabold neon-heading mb-6 leading-tight animate-fadeIn ${loaded ? '' : 'opacity-0'}`}>

        

                    Level Up Your Productivity

        

                  </h1>

        

                  <p className={`text-xl sm:text-2xl text-foreground mb-10 opacity-80 max-w-3xl mx-auto animate-fadeIn ${loaded ? '' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>

        

                    Experience seamless task management with a cutting-edge, visually stunning interface.

        

                    Get organized, stay focused, and achieve your goals with ease.

        

                  </p>

        

                </div>

        

        

        

                                                {/* Feature Highlights */}

        

        

        

                                                <div className="grid grid-cols-2 gap-8 mb-16"> {/* Responsive grid with equal height */}

        

        

        

                                                  {[

        

        

        

                                                    { icon: FaRocket, title: "Intuitive Design", description: "Effortlessly manage tasks with a clean, user-friendly interface." },

        

        

        

                                                    { icon: FaTasks, title: "Powerful Features", description: "Track progress, set priorities, and collaborate with ease." },

        

        

        

                                                    { icon: FaShieldAlt, title: "Secure & Reliable", description: "Your data is safe with robust authentication and privacy." },

        

        

        

                                                    { icon: FaSyncAlt, title: "Cross-Device Sync", description: "Access your tasks seamlessly across all your devices, anytime, anywhere." } // Added new feature

        

        

        

                                                  ].map((feature, index) => (

        

        

        

                                                    <div key={index} className={`m-6 p-8 modern-card flex flex-col items-center justify-center w-64 h-64 md:w-80 md:h-80 hover:scale-105 transition-transform duration-300 ${loaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: `${0.6 + index * 0.2}s` }}> {/* Removed max-w-xs and mx-auto */}

        

        

        

                                                      <feature.icon className="text-5xl text-neon-pink mb-4 animate-float" />

        

        

        

                                                      <h3 className="text-2xl font-semibold neon-heading mb-2">{feature.title}</h3>

        

        

        

                                                      <p className="text-gray-300 text-sm text-center">{feature.description}</p>

        

        

        

                                                    </div>

        

        

        

                                                  ))}

        

        

        

                                                </div>

        

        

        

                                        

        

        

        

                                                {/* Call to Action Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <Link href="/signup" passHref>

            <button className={`neon-button text-lg group ${loaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>

              Get Started (Sign Up) <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />

            </button>

          </Link>

          <Link href="/signin" passHref>

            <button className={`neon-button text-lg group ${loaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>

              Sign In <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

}