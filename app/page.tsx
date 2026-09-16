import React from 'react';
import Image from 'next/image';

const CameraLens = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6 md:w-[19px] md:h-[19px] inline-block mx-[1px] mt-[4px] text-neutral-900"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center text-2xl md:text-3xl font-bold tracking-tighter">
            Techbr<CameraLens /><CameraLens />m
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-500">
            <a href="#mobiles" className="hover:text-neutral-900 transition-colors">Mobiles</a>
            <a href="#evs" className="hover:text-neutral-900 transition-colors">EVs</a>
            <a href="#ai" className="hover:text-neutral-900 transition-colors">AI & Tech</a>
            <a href="#software" className="hover:text-neutral-900 transition-colors">Software</a>
          </div>

          <button className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[90vh]">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter animate-fade-up opacity-0">
          Pro technology. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-800">
            Explained simply.
          </span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-neutral-500 max-w-2xl font-medium animate-fade-up delay-100 opacity-0">
          The ultimate destination for next-gen Mobiles, Electric Vehicles, Artificial Intelligence, and Software.
        </p>
        
        <div className="mt-10 flex space-x-4 animate-fade-up delay-200 opacity-0">
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-neutral-200">
            Explore Latest
          </button>
        </div>

        {/* Hero Image Container */}
        <div className="mt-16 w-full max-w-5xl animate-fade-up delay-300 opacity-0">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700 ease-out">
            <Image 
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2560&auto=format&fit=crop" 
              alt="Premium Smartphone" 
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10 z-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight text-left">
                Galaxy S25 Ultra vs iPhone 16 Pro.<br/>The ultimate showdown.
              </h2>
            </div>
          </div>
        </div>
      </main>

      {/* Bento Grid Categories Section */}
      <section className="px-6 py-20 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Dive into the future.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* EV Card */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-10 z-10 relative">
                <h3 className="text-3xl font-bold tracking-tight">Electric Vehicles</h3>
                <p className="mt-2 text-neutral-500 font-medium">The road ahead is electric.</p>
              </div>
              <div className="relative w-full h-72">
                <Image 
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop" 
                  alt="Electric Vehicle" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* AI Card */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-10 z-10 relative">
                <h3 className="text-3xl font-bold tracking-tight">Artificial Intelligence</h3>
                <p className="mt-2 text-neutral-500 font-medium">Smarter tools, smarter life.</p>
              </div>
              <div className="relative w-full h-72">
                <Image 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" 
                  alt="AI Technology" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Software Card */}
            <div className="group relative bg-neutral-900 text-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:col-span-2">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <Image 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2560&auto=format&fit=crop" 
                  alt="Software Code" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative p-10 md:p-16 flex flex-col justify-center h-full min-h-[350px] z-10">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Next-Gen Software.</h3>
                <p className="mt-4 text-xl text-neutral-300 font-medium max-w-lg">
                  Deep dives into the apps, operating systems, and developer tools powering tomorrow.
                </p>
                <button className="mt-8 bg-white text-neutral-900 w-max px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  Read Reviews
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-medium">
          <p>© 2026 TechBroom Media. All rights reserved. Made with ❤️ by Adarsh</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-900">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}