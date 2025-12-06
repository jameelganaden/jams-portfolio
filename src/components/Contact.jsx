import { Mail } from 'lucide-react';
import linkedinIcon from '/src/assets/photos/linkedin.png';
import twitchIcon from '/src/assets/photos/twitch.png';

const Contact = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '110vh',
      gap: '3vw'
    }}>
      
      {/* PFP */}
      <div style={{
        width: '13vw',
        height: '13vw',
        borderRadius: '50%',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '0.15vw solid #3b82f6',
        boxShadow: '0 0 3vw rgba(59, 130, 246, 0.3)',
        overflow: 'hidden'
      }}>
        <img 
          src="src/assets/photos/Portrait.PNG"
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* INFO TEXT */}
      <p style={{
        fontSize: '1vw',
        color: '#b0b0b0',
        maxWidth: '35vw',
        textAlign: 'center',
        lineHeight: '1.6',
        padding: '0 2vw'
      }}>
        Thank you for taking the time to explore my work :) 
        <br /><br />
        I'm always excited to connect with people who have similar hobbies and interests. 
        Feel free to reach out below if you have any questions, collaboration ideas, or just want to say hi!
      </p>

      {/* BUTTON SETTINGS */}
      <div style={{
        display: 'flex',
        gap: '2vw',
        marginTop: '0vw'
      }}>
        
        {/* EMAIL BUTTON */}
        <a
          href="mailto:ganadenjameel@gmail.com"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1vw',
            padding: '1vw 2vw',
            backgroundColor: '#0a0a0a',
            border: '0.15vw solid #3b82f6',
            borderRadius: '1vw',
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'all 0.3s',
            fontSize: '0.85vw'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#2a2a2a';
            e.currentTarget.style.boxShadow = '0 0 2vw rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#0a0a0a';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Mail size={20} style={{ width: '1vw', height: '1vw' }} />
          Email
        </a>

        {/* IN BUTTON */}
        <a
          href="https://linkedin.com/in/jameelganaden"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1vw',
            padding: '1vw 2vw',
            backgroundColor: '#0a0a0a',
            border: '0.15vw solid #3b82f6',
            borderRadius: '1vw',
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'all 0.3s',
            fontSize: '0.85vw'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#2a2a2a';
            e.currentTarget.style.boxShadow = '0 0 2vw rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#0a0a0a';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            style={{ width: '1vw', height: '1vw', filter: 'invert(90%)' }}
          />
          LinkedIn
        </a>

        {/* TWITCH BUTTON */}
        <a
          href="https://www.twitch.tv/jaymeal"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1vw',
            padding: '1vw 2vw',
            backgroundColor: '#0a0a0a',
            border: '0.15vw solid #3b82f6',
            borderRadius: '1vw',
            color: '#e0e0e0',
            textDecoration: 'none',
            transition: 'all 0.3s',
            fontSize: '0.85vw'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#2a2a2a';
            e.currentTarget.style.boxShadow = '0 0 2vw rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#0a0a0a';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img
            src={twitchIcon}
            alt="Twitch"
            style={{ width: '1vw', height: '1vw', filter: 'invert(90%)' }}
          />
          Twitch
        </a>
      </div>
    </div>
  );
};

export default Contact;
