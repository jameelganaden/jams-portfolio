import React, { useState } from 'react';

const Projects = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);

const imageModules = import.meta.glob('/src/assets/projPhotos/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.keys(imageModules).reduce((acc, path) => {
  const fileName = path.split('/').pop().split('.')[0];
  acc[fileName] = imageModules[path].default;
  return acc;
}, {});

  const projects = [
    {
      id: 1,
      title: 'Jam\'s Fishing Game',
      miniDesc: 'Relaxing Fishing Game is a full-stack idle fishing game built with React, featuring multiple environments, unique fish species, and strategic progression. Players catch, sell, and display fish while unlocking upgrades, with a persistent save system and dynamic, responsive gameplay.',
      fullDesc: `Jam\'s Fishing Game is built with React, featuring a comprehensive progression system with multiple fishing environments (Ocean, Lake, Swamp, River), each with unique fish species and boss encounters. 
      The game implements a strategic economy where players catch fish with varying rarities, sizes, and special traits (transparent, shiny, rainbow, glowing), then sell them to unlock upgrades and new locations. 
      Core features include a mini-game fishing mechanic with adjustable difficulty, a customizable aquarium where players can display their favorite catches, and an extensive fish index with completion tracking across 24+ species and 500 different fish mixes.
      The project demonstrates advanced React state management, SVG animations for dynamic fish movement, responsive design that scales seamlessly across mobile and desktop devices, and modular architecture with 
      separated components, utilities, and data files. Built with Vite, Tailwind CSS, and modern JavaScript, the game showcases clean code practices, efficient rendering techniques, and an engaging user experience designed for both casual play and completionist gameplay.`,
      images: [
        images['fishing1'],
        images['fishing2'],
        images['fishing3']
      ],
      links: {
        github: 'https://github.com/jameelganaden/jams-fishing',
        demo: 'https://jameelganaden.github.io/jams-fishing/'
      }
    },
    {
      id: 2,
      title: 'Twitch User Engagement Prediction Model',
      miniDesc: 'Predicted Twitch users’ engagement duration with streams using a Random Forest model based on viewing history, streamer popularity, and session patterns. This helps understand user behavior and optimize content recommendations.',
      fullDesc: `For this project, I worked with a team and analyzed a large-scale Twitch livestreaming dataset from UCSD to model and predict user engagement duration based on viewing behavior, streamer popularity, and temporal patterns. 
      After exploring multiple approaches (baseline predictors, linear models, regularized regression, neural networks, and tree-based methods), we developed a Random Forest Regression model that achieved 
      strong performance with an MAE of 2.08 and RMSE of 3.54. I engineered key features such as total watch time, number of streams watched, previous session duration, and aggregated engagement metrics, and 
      applied hyperparameter tuning to optimize model depth, feature selection, and ensemble size. The final model effectively captured complex user–streamer interaction patterns and handled noise and outliers 
      better than other models. This project demonstrates my ability to perform large-scale data preprocessing, feature engineering, model selection, and evaluation to build predictive systems for dynamic environments like live-streaming platforms.`,
      images: [
        images['predict1'],
        images['predict2'],
        images['predict3']
      ],
      links: {
        docs: 'https://docs.google.com/document/d/1t4DUmcN2DbwVXbQyaCqE7H23vY3wZMgRU9jEQPFR7Zw/edit?usp=sharing'
      }
    },
    {
      id: 3,
      title: 'Plateful – Recipe Tracking App',
      miniDesc: 'Designed and developed a scalable full-stack web application with React, Express, MongoDB, and TypeScript, featuring 50+ user-submitted recipes with dietary filters, cultural tags, and cost tracking, ensuring both responsive UI and backend reliability.',
      fullDesc: `Plateful is a full-stack recipe tracking web application built with React, Express, MongoDB, and TypeScript, designed to help users discover, organize, and manage recipes efficiently. The app features over 50 user-submitted recipes with dietary filters, 
      cultural tags, and cost tracking, all presented through a responsive and intuitive UI. Users can create accounts, securely upload and favorite recipes, and maintain personalized dashboards, with all authentication and data securely handled on the backend. 
      The application also includes a dynamic, query-optimized filtering system that updates recipes in real time across multiple dimensions such as diet, cuisine, cost, and cook time, ensuring low-latency search and smooth interaction. Built for scalability and maintainability, 
      Plateful demonstrates modular architecture, efficient database schema design, and seamless integration between front-end and back-end components. Developed within a five-person agile team, the project highlights my skills in full-stack development, 
      collaborative workflow management, and delivering a robust, user-focused product.`,
      images: [
        images['plate1'],
        images['plate2'],
        images['plate3']
      ],
      links: {
        github: 'https://github.com/nguyenjh/CSE-110-Group-11',
        demo: 'COMING SOON'
      }
    },
    {
      id: 4,
      title: 'Discord Chat Bot',
      miniDesc: <>Machine learning integration to serve in any Discord server upon request!<br /><br />(MORE COMING SOON)</>,
      fullDesc: 'AIMED TO LAUNCH LATE FALL 2026.',
      images: [
        images['disc1'],
        images['disc2'],
        images['disc3']
      ],
      links: {
        github: 'https://github.com/yourusername/ai-chat-assistant',
        docs: 'https://docs.google.com/document/d/your-doc-id-2'
      }
    }
  ];

  const handleCarouselScroll = (e) => {
    if (expandedProject) return;
    e.preventDefault();
    const delta = e.deltaY;
    if (Math.abs(delta) > 5) {
      if (delta > 0 && carouselIndex < projects.length - 1) {
        setCarouselIndex(prev => prev + 1);
      } else if (delta < 0 && carouselIndex > 0) {
        setCarouselIndex(prev => prev - 1);
      }
    }
  };

  const handleProjectClick = (project) => {
    const clickedIndex = projects.findIndex(p => p.id === project.id);
    
    if (clickedIndex === carouselIndex) {
      setExpandedProject(expandedProject ? null : project);
    } else {
      setCarouselIndex(clickedIndex);
      setExpandedProject(null);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        paddingTop: '80px',
        overflow: 'hidden',
        position: 'relative'
      }}
      onWheel={handleCarouselScroll}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        flex: 1
      }}>
        {projects.map((project, i) => {
          const offset = i - carouselIndex;
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          return isVisible && (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              style={{
                width: isCenter ? '32vw' : '28vw',
                height: expandedProject?.id === project.id ? '80vh' : '22vw',
                backgroundColor: '#0a0a0a',
                border: isCenter ? '2px solid #3b82f6' : '2px solid #2a2a2a',
                borderRadius: '10px',
                padding: '3vw',
                transform: `translateX(${offset * 30}vw) scale(${isCenter ? 1 : 0.9})`,
                opacity: Math.abs(offset) === 2 ? 0.15 : (isCenter ? 1 : 0.4),
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                position: 'absolute',
                zIndex: isCenter ? 10 : (offset < 0 ? 9 - Math.abs(offset) : 9 - offset),
                overflow: expandedProject?.id === project.id ? 'auto' : 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px'
              }}
              onMouseEnter={e => {
                if (!isCenter && Math.abs(offset) !== 2) {
                  e.currentTarget.style.opacity = '0.7';
                }
              }}
              onMouseLeave={e => {
                if (!isCenter) {
                  e.currentTarget.style.opacity = Math.abs(offset) === 2 ? '0.15' : '0.4';
                }
              }}
            >
              <h2 style={{
                margin: 0,
                fontSize: '35px',
                color: '#e0e0e0'
              }}>
                {project.title}
              </h2>
              <p style={{
                margin: 0,
                fontSize: '20px',
                color: '#888',
                opacity: expandedProject?.id === project.id ? 0 : 1,
                maxHeight: expandedProject?.id === project.id ? 0 : '100px',
                overflow: 'visible',
                transition: 'opacity 0.3s ease-out, max-height 0.3s ease-out'
              }}>
                {project.miniDesc}
              </p>
              {expandedProject?.id === project.id && (
                <div style={{
                  marginTop: '20px',
                  animation: 'fadeIn 0.3s ease-in'
                }}>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#b0b0b0',
                    marginBottom: '20px'
                  }}>
                    {project.fullDesc}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    fontSize: '40px',
                    marginBottom: '20px'
                  }}>
                    {project.images.map((img, idx) => (
                      <div key={idx} style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#1a1a1a',
                        borderRadius: '8px',
                        border: '1px solid #2a2a2a',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={img}
                          alt={`${project.title} ${idx + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap'
                  }}>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#2a2a2a',
                          border: '1px solid #3b82f6',
                          borderRadius: '6px',
                          color: '#e0e0e0',
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'all 0.3s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3b82f6'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#2a2a2a',
                          border: '1px solid #3b82f6',
                          borderRadius: '6px',
                          color: '#e0e0e0',
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3b82f6'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.links.docs && (
                      <a
                        href={project.links.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#2a2a2a',
                          border: '1px solid #3b82f6',
                          borderRadius: '6px',
                          color: '#e0e0e0',
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3b82f6'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                      >
                        Documentation
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '15px 30px',
        backgroundColor: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #2a2a2a',
        borderRadius: '50px',
        fontSize: '14px',
        color: '#b0b0b0'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          {projects.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: idx === carouselIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: idx === carouselIndex ? '#3b82f6' : '#2a2a2a',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
        <div style={{
          borderLeft: '1px solid #2a2a2a',
          paddingLeft: '20px',
          fontWeight: '500',
          color: '#e0e0e0'
        }}>
          <span style={{ color: '#3b82f6', fontSize: '18px' }}>{carouselIndex + 1}</span>
          <span style={{ color: '#666', margin: '0 8px' }}>/</span>
          <span style={{ color: '#888' }}>{projects.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;