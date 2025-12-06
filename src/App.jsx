import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#e0e0e0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '30px 50px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        zIndex: 1000,
        fontSize: '14px',
        letterSpacing: '1px'
      }}>
        <button
          onClick={() => setCurrentPage('about')}
          style={{
            background: 'none',
            border: 'none',
            color: currentPage === 'about' ? '#e0e0e0' : '#666',
            cursor: 'pointer',
            transition: 'color 0.3s',
            fontSize: '14px',
            letterSpacing: '1px'
          }}
        >
          ABOUT
        </button>
        <span style={{ color: '#333' }}>|</span>
        <button
          onClick={() => setCurrentPage('projects')}
          style={{
            background: 'none',
            border: 'none',
            color: currentPage === 'projects' ? '#e0e0e0' : '#666',
            cursor: 'pointer',
            transition: 'color 0.3s',
            fontSize: '14px',
            letterSpacing: '1px'
          }}
        >
          PROJECTS
        </button>
        <span style={{ color: '#333' }}>|</span>
        <button
          onClick={() => setCurrentPage('contact')}
          style={{
            background: 'none',
            border: 'none',
            color: currentPage === 'contact' ? '#e0e0e0' : '#666',
            cursor: 'pointer',
            transition: 'color 0.3s',
            fontSize: '14px',
            letterSpacing: '1px'
          }}
        >
          CONTACT
        </button>
      </nav>

      {currentPage === 'about' && <About />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'contact' && <Contact />}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * {
          box-sizing: border-box;
        }
        button {
          font-family: inherit;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default App;