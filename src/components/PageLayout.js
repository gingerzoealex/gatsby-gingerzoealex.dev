import React from "react";
import { Background } from "./Background";
import { Foreground } from "./Foreground";
import { TriangleBottomLeft } from "./BackgroundShapes";
import { Footer } from "./Footer";
import { SocialMedia } from "../components/SocialMedia";


export const PageLayout = () => (

    <div id="container">
        <div className="parallax-wrapper">
            <div className="content">
                <Background />
            </div>
        </div>
        <div className="regular-wrapper">
            <Foreground />
            <TriangleBottomLeft />
        </div>
        <Footer />
    </div>
)