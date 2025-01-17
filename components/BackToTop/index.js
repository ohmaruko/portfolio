import styles from './BackToTop.module.css';
import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {visible && (
        <button onClick={scrollToTop} className={styles.backToTopButton}>
          <img src="/images/mascot.svg" alt="The mascot that takes you back to the top of the page"/>
          <p>Fly to the top!</p>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
