import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import gsap  from "gsap";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () =>{
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
    )
}

export default App;