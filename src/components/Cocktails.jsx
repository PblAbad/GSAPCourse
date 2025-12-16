import React from 'react'
import {cocktailLists} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import leftLeaf from '../assets/cocktail-left-leaf.png';
import rightLeaf from '../assets/cocktail-right-leaf.png';

const Cocktails = () => {
    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start:'top 30%',
                end:'bottom 80%',
                scrubber: true
            }
        })
        const cocktailsTexts = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start:'top 90%',
                end:'bottom top',
                scrub: true,
                scrubber: true
            }
        })
        parallaxTimeline
            .from('#c-left-leaf', {
                y: 100,
                x: -100
            })
            .from('#c-right-leaf', {
                y: 100,
                x: 100
            })
        cocktailsTexts
            .fromTo('#populares', {
                x:-100
            },
            {
                x:0,
                duration:0.5,
                ease: 'easeInOut'
            })
            .fromTo('#populares0', {
                x:100
            },
            {
                x:0,
                duration:0.5,
                ease: 'easeInOut'
            }, '<')

    })
    return (
        <section id="cocktails" className="noisy">
            <img src={leftLeaf} alt="l-leaf" id="c-left-leaf"/>
            <img src={rightLeaf} alt="r-leaf" id="c-right-leaf"/>

            <div className="list">
                <div className="popular" id="populares">
                    <h2>Cóckteles más populares</h2>

                    <ul>
                        {cocktailLists.map((cocktail)=> (
                            <li key={cocktail.name}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.country} | {cocktail.detail}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved" id="populares0">
                    <h2>Cóckteles 0% más populares</h2>

                    <ul>
                        {cocktailLists.map((cocktail)=> (
                            <li key={cocktail.name}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.country} | {cocktail.detail}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Cocktails
