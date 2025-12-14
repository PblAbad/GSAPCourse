import React from 'react'
import {cocktailLists} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

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
        parallaxTimeline
            .from('#c-left-leaf', {
                y: 100,
                x: -100
            })
            .from('#c-right-leaf"', {
                y: 100,
                x: 100
            })
    })
    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf"/>
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf"/>

            <div className="list">
                <div className="popular">
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
                <div className="loved">
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
    )
}
export default Cocktails
