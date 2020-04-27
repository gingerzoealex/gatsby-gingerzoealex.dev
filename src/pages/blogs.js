import React from "react";
import '../styles/index.css';
import { PageLayout } from "../components/PageLayout";

export default () => (
    <React.Fragment>
    <PageLayout />

    <div id="contentContainer"> 
        <p>
            Until I get blog posts set up to be hosted on my website, they are on <a style={{padding: '0px', color: 'purple'}} href="https://medium.com/@gingerzoealex">Medium</a>.
            Some are personal, some are technical. 

        </p>
    </div>

</React.Fragment>
)
