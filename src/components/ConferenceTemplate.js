import React, { useState, useEffect } from 'react';
import conferenceData from '../data/conferenceData';

const ConferenceWebsite = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const conferenceDate = new Date('March 16, 2025 10:00:00');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const timeRemaining = conferenceDate > currentTime ? conferenceDate - currentTime : 0;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-transparent z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">
            {conferenceData.title}
          </h1>
          <p className="text-2xl mb-6">{conferenceData.date} | {conferenceData.venue}</p>
          
          {timeRemaining > 0 ? (
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-xl p-4">
                <span className="text-4xl font-bold text-green-400">{days}</span>
                <p>Days</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-xl p-4">
                <span className="text-4xl font-bold text-green-400">{hours}</span>
                <p>Hours</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-xl p-4">
                <span className="text-4xl font-bold text-green-400">{minutes}</span>
                <p>Minutes</p>
              </div>
            </div>
          ) : (
            <div className="bg-green-400 text-black font-bold px-6 py-3 rounded-full text-xl animate-pulse">
              Event in Progress!
            </div>
          )}
        </div>
      </section>
      
      {/* Schedule Timeline */}
      <section className="py-16 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">Programme Timeline</span>
            <div className="h-1 w-24 bg-green-400 mx-auto mt-4"></div>
          </h2>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-green-400/30 transform -translate-x-1/2"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {conferenceData.scheduleHighlights.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 bg-gray-900/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                    <p className="text-lg font-medium text-green-400">{item.time}</p>
                    <h3 className="text-xl font-bold mt-2">{item.event}</h3>
                    <p className="text-gray-400 mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
 {/* Keynotes Section */}
<section className="py-16 bg-gradient-to-b from-black/95 to-black">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">Keynote Speakers</span>
      <div className="h-1 w-24 bg-green-400 mx-auto mt-4"></div>
    </h2>
    
    <div className="flex flex-col gap-8">
      {conferenceData.keynotes.map((keynote) => (
        <div key={keynote.id} className="group bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">{keynote.title}</h3>
            <div className="mt-4 bg-black/40 p-4 rounded-lg flex-grow">
              <p className="text-xl font-bold">{keynote.speaker}</p>
              <p className="text-gray-400">{keynote.role}</p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-green-400/10">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-300">{keynote.time}</p>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-300">{keynote.venue}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Panels Section */}
      <section className="py-16 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">Panel Discussions</span>
            <div className="h-1 w-24 bg-green-400 mx-auto mt-4"></div>
          </h2>
          
          <div className="space-y-12">
            {conferenceData.panels.map((panel) => (
              <div key={panel.id} className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-400">{panel.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/40 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-gray-300">{panel.time}</p>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <p className="text-gray-300">{panel.venue}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <p className="text-gray-300">Moderator: {panel.moderator}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Organized by: {panel.organizers.join(", ")}</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <h4 className="font-bold text-lg mb-4 flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Panelists
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {panel.panelists.map((panelist, idx) => (
                      <div key={idx} className="bg-black/40 border border-green-400/10 rounded-lg p-3 hover:border-green-400/30 transition-all">
                        <p className="font-bold">{panelist.name}</p>
                        <p className="text-gray-400 text-sm">{panelist.affiliation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sessions Section */}
      <section className="py-16 bg-gradient-to-b from-black/95 to-black">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">Presentation Sessions</span>
            <div className="h-1 w-24 bg-green-400 mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {conferenceData.sessions.map((session) => (
              <div key={session.id} className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-1 bg-green-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">{session.title}</h3>
                </div>
                
                <div className="bg-black/40 p-3 rounded-lg mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-gray-300 text-sm">{session.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <p className="text-gray-300 text-sm">{session.venue}</p>
                  </div>
                </div>
                
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                  {session.presentations.map((presentation, idx) => (
                    <div key={idx} className="group border border-green-400/10 rounded-lg p-3 hover:border-green-400/30 transition-all">
                      <p className="font-bold group-hover:text-green-400 transition-colors">{presentation.title}</p>
                      <p className="text-gray-400 text-sm mt-1">Presenter: {presentation.presenter}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
{/* Workshops Section */}
<section className="py-16 bg-gradient-to-b from-black to-black/95" aria-labelledby="workshops-heading">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 id="workshops-heading" className="text-3xl font-bold text-green-400 relative inline-block">
          Workshops
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-green-500/70 rounded-full"></span>
        </h2>
        {conferenceData.workshops.length > 0 && (
          <p className="text-gray-400">{conferenceData.workshops.length} sessions available</p>
        )}
      </div>
      
      {conferenceData.workshops.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Workshop schedule will be announced soon.</p>
        </div>
      ) : (
        <div className="grid gap-8">
          {conferenceData.workshops.map(workshop => (
            <article
              key={workshop.id}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-xl transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/5 group"
            >
              <header>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {workshop.title}
                </h3>
                {workshop.subtitle && (
                  <p className="mt-2 text-lg text-gray-200 font-medium">{workshop.subtitle}</p>
                )}
                
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-1.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <time dateTime={workshop.timeISO || workshop.time}>{workshop.time}</time>
                    <span className="ml-1 text-gray-400">({workshop.duration})</span>
                  </div>
                  
                  {workshop.location && (
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-1.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {workshop.location}
                    </div>
                  )}
                </div>
              </header>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/70 rounded-lg p-5 md:col-span-1 h-fit">
                  <h4 className="text-sm font-medium text-green-400 mb-3 uppercase tracking-wider">Workshop Details</h4>
                  
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-xs text-green-400 uppercase">Moderator</dt>
                      <dd className="font-medium text-white mt-1">{workshop.moderator}</dd>
                    </div>
                    
                    {workshop.capacity && (
                      <div>
                        <dt className="text-xs text-green-400 uppercase">Capacity</dt>
                        <dd className="font-medium text-white mt-1">{workshop.capacity} attendees</dd>
                      </div>
                    )}
                    
                    {workshop.requirements && (
                      <div>
                        <dt className="text-xs text-green-400 uppercase">Requirements</dt>
                        <dd className="text-gray-300 mt-1">{workshop.requirements}</dd>
                      </div>
                    )}
                    
                    {workshop.info && (
                      <div>
                        <dt className="text-xs text-green-400 uppercase">Additional Info</dt>
                        <dd className="text-gray-300 mt-1">{workshop.info}</dd>
                      </div>
                    )}
                    
                    {workshop.keyPoints && workshop.keyPoints.length > 0 && (
                      <div>
                        <dt className="text-xs text-green-400 uppercase">Key Points Covered</dt>
                        <dd className="text-gray-300 mt-1">
                          <ul className="list-disc pl-5 space-y-1.5">
                            {workshop.keyPoints.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    )}
                  </dl>
                  
                  {workshop.registration && (
                    <div className="mt-5 pt-5 border-t border-gray-700">
                      <a 
                        href={workshop.registrationLink || "#register"} 
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
                      >
                        Register for Workshop
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium text-green-400 mb-3 uppercase tracking-wider">About this Workshop</h4>
                  
                  {workshop.abstract ? (
                    <div className="prose prose-sm prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed">
                        {workshop.abstract}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-400 italic">No abstract provided for this workshop.</p>
                  )}
                  
                  {workshop.topics && workshop.topics.length > 0 && (
                    <div className="mt-4">
                      <h5 className="text-xs font-medium text-green-400 mb-2">Topics covered</h5>
                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        {workshop.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {workshop.tags && workshop.tags.map((tag, index) => (
                      <span key={index} className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    
                    {workshop.level && (
                      <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                        {workshop.level}
                      </span>
                    )}
                    
                    {workshop.id === 'workshop4' && (
                      <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Bring Laptop
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  </div>
</section>
      {/* Committee Section */}
      <section className="py-16 bg-gradient-to-b from-black/95 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-300">Organizing Committee</span>
            <div className="h-1 w-24 bg-green-400 mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {conferenceData.committee.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-green-400/20 rounded-xl p-5 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-400/10 text-center group">
                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">{member.name}</h3>
                <p className="text-gray-400 mt-2">{member.role}</p>
                <a 
                  href={member.linkedIn} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-green-400 hover:text-green-300"
                >
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">{conferenceData.title}</h3>
              <p className="text-gray-400">{conferenceData.date}</p>
              <p className="text-gray-400 mt-2">{conferenceData.venue}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <a href={`mailto:${conferenceData.contactEmail}`} className="flex items-center text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {conferenceData.contactEmail}
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href={`https://twitter.com/${conferenceData.socialMedia.twitter}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href={`https://linkedin.com/company/${conferenceData.socialMedia.linkedin}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={`https://instagram.com/${conferenceData.socialMedia.instagram}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-green-400/10 text-center">
            <p className="text-gray-500">© 2025 Oxford AI Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default ConferenceWebsite;