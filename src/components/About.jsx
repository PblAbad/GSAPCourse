import React from 'react'
import abt1 from '../assets/abt1.png';
import abt2 from '../assets/abt2.png';
import abt5 from '../assets/abt5.png';
import abt3 from '../assets/abt3.png';
import abt4 from '../assets/abt4.png';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";

const About = () => {
    useGSAP(() =>{
        const tittleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeline
            .from(tittleSplit.words, {
                opacity: 0,
                duration: 1,
                yPercent: 100,
                ease: "expo.out",
                stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.04
            }, '-=0.5')
    })

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Mejores Cockteles</p>
                        <h2>Todos los detalles importan<span className="text-white">-</span>
                            Del limón a la guinda
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Todos los cockteles que servimos es un reflejo de nuestra obsesión con la perfección, del limón a la guinda. Ese cariño es lo que los hace memorables.
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                Más de +12000 clientes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src={abt1} alt="grid-img-1"/>
                    </div>
                </div>
                <div className="md:col-span-6">
                    <div className="noisy">
                        <img src={abt2} alt="grid-img-1"/>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src={abt5} alt="grid-img-1"/>
                    </div>
                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy">
                        <img src={abt3} alt="grid-img-1"/>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="noisy">
                        <img src={abt4} alt="grid-img-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
