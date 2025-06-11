// "use client";
// import {useEffect} from 'react';
// import {useSearchParams} from 'next/navigation';
// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
//
// export const ScrollHandler = () => {
//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);
//
//         const handleHashScroll = () => {
//             const hash = window.location.hash;
//             if (hash) {
//                 const targetId = hash.substring(1);
//                 const targetElement = document.getElementById(targetId);
//
//                 if (targetElement) {
//                     setTimeout(() => {
//                         window.scrollTo({
//                             top: targetElement.offsetTop - 100,
//                             behavior: 'smooth'
//                         });
//                         // ScrollTrigger.create({
//                         //     trigger: targetId,
//                         //     start: 'top 20px',
//                         //     end: 'bottom +=430',
//                         // });
//                     }, 300);
//
//                 }
//             }
//         };
//
//         handleHashScroll();
//
//         window.addEventListener('hashchange', handleHashScroll);
//
//         return () => {
//             window.removeEventListener('hashchange', handleHashScroll);
//         };
//     }, []);
//
//     return null;
// };

"use client";

import {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export const ScrollHandler = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'auto'
                    });

                    setTimeout(() => {
                        const headerOffset = 50; // Adjust based on your header height
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            }
        };

        handleHashScroll();

        window.addEventListener('hashchange', handleHashScroll);

        return () => {
            window.removeEventListener('hashchange', handleHashScroll);
        };
    }, []);

    return null;
};
