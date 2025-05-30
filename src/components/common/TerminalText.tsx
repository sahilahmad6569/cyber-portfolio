import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
  showCursor?: boolean;
  delay?: number;
  onComplete?: () => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({
  text,
  typingSpeed = 50,
  className = '',
  showCursor = true,
  delay = 0,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setCurrentIndex(0);
    setStarted(false);
  }, [text]);

  useEffect(() => {
    // Initial delay before starting
    if (!started) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      
      return () => clearTimeout(startTimeout);
    }

    if (!started || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
      
      // Call onComplete when typing is finished
      if (currentIndex === text.length - 1 && onComplete) {
        setTimeout(onComplete, typingSpeed);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, typingSpeed, started, delay, onComplete]);

  return (
    <div className={`font-mono ${className}`}>
      {displayedText}
      {showCursor && (
        <span className={`typing-cursor ${currentIndex >= text.length ? 'animate-blink' : ''}`}></span>
      )}
    </div>
  );
};

export default TerminalText;