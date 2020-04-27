import React, { useState, useEffect } from "react";
import axios from 'axios';


export const usingTheApi = () => {
  return(
    <div id='code-box-1'>
         {`<p>export const AstronomySection = () => {
            const [data, setData] = useState({ astronomy: [] });
            useEffect(() => {      
              async function fetchData() {
                const result = await axios('https://api.nasa.gov/planetary/apod?api_key=BnmIErd0QkffkktbvrHlBthgf0ZVExqR08yASKTQ');
                setData(result.data);
              }
              fetchData();
            });
            return (
                <ImageOfTheDay props={ data } />
            );
          }</p>`}
        </div>
  )
}
export const AstronomySection = () => {
      const [data, setData] = useState({ astronomy: [] });
      const API_KEY = process.env.NASA_API_KEY;
      useEffect(() => {      
        async function fetchData() {
          const result = await axios(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
          setData(result.data);
        }
        fetchData();
      });
      return (
          <ImageOfTheDay props={ data } />
      );
}

export const TleApiData = () => {
    
}

const ImageOfTheDay = ({props}) => {
    const {hdurl, date, title} = props;
    if(!hdurl){
      return(
        <div>
          <h4>{date}</h4>
          <img className="image" src='https://i.imgur.com/EaaHUWFg.jpg' alt="NASA POTD from the photo of the day Open API" />
          <p style={{fontSize: 'small'}}> This means either NASA's OpenAPI hasn't worked, or I've been playing with code and there have been too many requests sent. The latter seems more likely. Try again in an hour.</p>
        </div>
      )
    }
    else{
      return(
          <div>
              <a href={hdurl}>
                <img src={hdurl} className="image" alt={title}  />
                <h4>{date}</h4>
                <p style={{fontSize: 'small'}}>Cool image of the day from NASA: {title}</p>
              </a>
          </div>
      )
    }
}


