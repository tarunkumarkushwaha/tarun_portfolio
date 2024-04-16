import React, { useEffect } from 'react'

// here ref = ref
// className = class you want to toggle 
// elem = which element you want to toggle style 
// 1 = current element 
// 2 = first child node 
// 3 = third child node 
// 4 = nextSibling of current element

const useScroll = (ref, className, elem) => {

    const scrollReveal = function () {
        let elementtype = {
            1: ref.current,
            2: ref.current.childNodes[0],
            3: ref.current.childNodes[1],
            4: ref.current.nextSibling,
        }
        const elementIsInScreen = ref.current.getBoundingClientRect().top < window.innerHeight / 1.15;
        if (elementIsInScreen) {
            elementtype[elem].classList.add(className);
        } else {
            elementtype[elem].classList.remove(className);
        }
    }
    useEffect(() => {
        scrollReveal();
        window.removeEventListener('scroll', scrollReveal);
        window.addEventListener('scroll', scrollReveal, { passive: true });
        return () => window.removeEventListener('scroll', scrollReveal);
    }, []);
}

export default useScroll