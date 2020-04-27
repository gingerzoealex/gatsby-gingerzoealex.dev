

import React from "react";
import '../styles/index.css';
import { PageLayout } from "../components/PageLayout";

export default () => {
    return(
    <div>
    <PageLayout />
    <div id="contentContainer">

        <h3>Technical Talks</h3>
                    <a href="https://womentechmakersbelfast.com/speakers.html">Women Tech Makers 2019</a> 
                    <h4>What Even is a Dataset?</h4>
            <a href="https://womentechmakersbelfast.com/speakers.html">Women Tech Makers 2019</a> & again at <a href="https://www.meetup.com/Ladies-of-Code-Glasgow/events/263173813/">Ladies of Code Glasgow</a>
                    <br />
                    <h4>Data Processing in PHP, and Other Natural Disasters</h4>
            <a href="https://www.nidevconf.com/sessions/zoegadonthompson/">NI Developer Conference 2019</a>
                    <br />
            <h4>Vue-ing Data</h4>
            <a href="https://www.meetup.com/Belfast-JS/events/262196011">BelfastJS - June 2019 Meetup</a>
                    <br />
            <h4>Geometry in JS</h4>
            <a href="https://www.meetup.com/belfast-lug/events/256107675/">BLUG November 2018</a>
            <br />
            <h4>The Adventures of a Ginger Trying to Make a JS Physics Simulation: The story of how a student developer who doesn't know any physics had to try to learn physics to make a JS physics simulation...using physics.</h4>
            <a href="https://www.meetup.com/Women-Who-Code-Belfast/events/253524217/">Women Who Code Lightning Talks - September 2018</a>
            <br />
            Also at <a href="https://www.meetup.com/Belfast-JS/events/255361173/">BelfastJS - October 2018</a>
            <hr />
                    <h3>Non-Tech Talks</h3>
            <h4>I Don't Know What I'm Doing</h4>
                    <a href="https://2018.nidevconf.com/sessions/zoegadonthompson/">NI Developer Conference 2018</a>
                    <br />
        
     </div>
</div>
);
}
