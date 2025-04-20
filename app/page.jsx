
import React from "react";
import Hero from "./Sections/home/HeroSection/Hero";
import Aboutus from "./Sections/home/AboutUs/Aboutus";
import GlobalPresence from "./Sections/home/GlobalPresence/GlobalPresence";
import Experience from "./Sections/home/Experince/Experience";
import Achievement from "./Sections/home/Achievement/Achievement";
import Testimonials from "./Sections/home/Testimonials/Testimonials";

const page = () => {
    return (
        <>
            <Hero />
            <Aboutus/>
            <GlobalPresence/>
            <Experience/>
            <Achievement/>
            <Testimonials/>
        </>
    );
};

export default page;
