import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Intro.css';

export default function Intro({ onIntroComplete }) {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to('.flame', {
      duration: 5, 
      x: '100vw',  
      ease: 'power1.inOut',
      onComplete: () => {
        onIntroComplete(); 
      },
    });

    setTimeout(() => {
      navigate('/home');
    }, 4000);
  }, [navigate,onIntroComplete]);

  return (
    <div className='container-I'>
    <div className="intro-container">
      <div className="flame">
        <h1 className="slogan">Compète. Gagne. Brille.</h1>
      </div>
    </div>
    </div>
  );
}
