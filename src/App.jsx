import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import gsap  from "gsap";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () =>{
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
        </main>
    )
}

export default App;