import React, { useState, useEffect } from 'react';
import JM from '/src/assets/JM.png';

const About = () => {
  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const galleryImages = Object.values(
    import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,gif,webp}', {
      eager: true,
      import: 'default'
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.20);
      setRotation2(prev => prev + 0.30);
      setRotation3(prev => prev + 0.40);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const CircularText = ({
    text,
    radius,
    fontSize,
    offset = 0,
    blueIndices = [],
    spacingMultiplier = 1,
    color = '#e0e0e0'
  }) => {
    const characters = text.split('');
    const totalChars = characters.length;
    const arcLength = 180 * spacingMultiplier;
    const angleStep = arcLength / totalChars;
    const vwFontSize = fontSize * 0.12; // made smaller

    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {characters.map((char, i) => {
          const angle = (i * angleStep - arcLength / 2 + offset) * (Math.PI / 180);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const charRotation = i * angleStep - arcLength / 2 + offset + 90;
          const isBlue = blueIndices.includes(i);

          return (
            <span
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}vw, ${y}vw) rotate(${charRotation}deg)`,
                fontSize: `${vwFontSize}vw`,
                fontWeight: 'bold',
                color: isBlue ? '#3b82f6' : color
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: '100vh',
      paddingTop: '6vw',
      position: 'relative'
    }}>

      {/* CIRCULAR TEXT */}
      <div style={{
        flex: '1 1 50%',
        position: 'relative',
        overflow: 'visible',
        minWidth: '300px'
      }}>
        <div style={{
          position: 'absolute',
          left: '-30vw',
          top: '40%',
          transform: 'translate(8%, -50%)',
          width: '60vw',
          height: '40vw'
        }}>

        {/* CENTER LOGO */}
        <a 
          href="https://www.twitch.tv/jaymeal" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '10vw',   // adjust size as needed
            height: '10vw',
            zIndex: 5,
            cursor: 'pointer'
          }}
        >
          <img 
            src="src\assets\JM.png" 
            alt="JM Logo" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* JAMEEL (JAM) GANADEN */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', transform: `rotate(${rotation}deg)`, zIndex: 2 }}>
            <CircularText 
              text="JAMEEL (JAM) GANADEN" 
              radius={18} 
              fontSize={28} 
              spacingMultiplier={1.6} 
              color="#e0e0e0" 
              blueIndices={[8,9,10]} // only (JAM)
            />
          </div>

          {/* SOFTWARE DEVELOPER */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', transform: `rotate(${rotation2}deg)`, zIndex: 2 }}>
            <CircularText 
              text="SOFTWARE DEVELOPER" 
              radius={13} 
              fontSize={16} 
              spacingMultiplier={1.2} 
              color="#9b9b9b" 
            />
          </div>

          {/* GAMER / TRAVELER */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', transform: `rotate(${rotation3}deg)`, zIndex: 2 }}>
            <CircularText 
              text="GAMER |" 
              radius={9} 
              fontSize={14} 
              spacingMultiplier={1.0} 
              color="#545454" 
            />
            <CircularText 
              text="TRAVELER |" 
              radius={9} 
              fontSize={14} 
              offset={180} 
              spacingMultiplier={1.0} 
              color="#545454" 
            />
          </div>
        </div>
      </div>

      {/* ABOUT ME / INTRO VIDEO */}
      <div style={{
        flex: '1 1 50%',
        padding: '0vw 5vw 5vw 0vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '300px'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '30vw',
          marginRight: '15vw',
        }}>
          <h1 style={{
            fontSize: '1.6vw',
            marginBottom: '1.5vw',
            color: '#e0e0e0'
          }}>
            JAMEEL (<span style={{ color: '#3b82f6' }}>JAM</span>) GANADEN
          </h1>

          <p style={{
            fontSize: '0.8vw',
            lineHeight: '1.6',
            color: '#b0b0b0',
            marginBottom: '1vw'
          }}>
            Hi! I'm Jameel, a passionate software developer with a love for creating fun apps and digital solutions for my community. 
            My journey in tech has been driven by gaming, LEGOs, and a constant desire to learn and grow both hardware and software.
          </p>

          <p style={{
            fontSize: '0.8vw',
            lineHeight: '1.6',
            color: '#b0b0b0',
            marginBottom: '1vw'
          }}>
            When I'm not coding, you'll find me exploring new games with friends, discovering food spots wherever I go, 
            or planning my next trip. I want to see as much of the world and its cultures as I can, collecting stories and experiences 
            to fuel my creativity.
          </p>

          <p style={{
            fontSize: '0.8vw',
            lineHeight: '1.6',
            color: '#b0b0b0',
            marginBottom: '1vw'
          }}>
            I specialize in full-stack development with a focus on creating engaging user experiences. My technical skills combined 
            with my creative mindset allow me to build applications that are both functional and delightful to use.
          </p>

          <h2 style={{
            fontSize: '1.25vw',
            marginBottom: '1vw',
            color: '#ffffff'
          }}>
            a peek into my life :)
          </h2>
          <div style={{
            width: '100%',
            aspectRatio: '16 / 9',
            backgroundColor: '#0a0a0a',
            borderRadius: '1vw',
            border: '0.2vw solid #2a2a2a',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {galleryImages.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Life Highlight ${idx + 1}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: idx === currentGalleryImage ? 1 : 0,
                  transition: 'opacity 1s ease-in-out'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
