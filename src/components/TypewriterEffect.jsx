import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [increasing, setIncreasing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(text.slice(0, currentIndex))
            if (increasing) {
                setCurrentIndex(prevcurrentIndex => prevcurrentIndex + 1);
                if (currentIndex >= text.length - 1) {
                    setIncreasing(false);
                }
            } else {
                setCurrentIndex(prevcurrentIndex => prevcurrentIndex - 1);
                if (currentIndex <= 1) {
                    setIncreasing(true);
                }
            }
        }, delay);

        return () => clearInterval(interval);
    }, [currentIndex, increasing, delay, text]);

    return (
        <>
            <span>{currentText}</span><span className='blink text-white font-semibold'>_</span>
        </>
    )
}

export default TypewriterEffect