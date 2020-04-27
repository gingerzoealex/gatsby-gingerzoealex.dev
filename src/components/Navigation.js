import React from "react"
import { Heart } from "./BackgroundShapes"
import "../styles/navigation.css"
import { SocialMedia } from "./SocialMedia"

export const TopBar = () => {
  return (
    <div id="topBarNav">
        <Heart />
        <span className="logo"><a href='/'>gingerzoealex.dev</a></span>
        <Menu />
    </div>
  )
}

const Menu = () => {
    return (
        <div id="menu" >
          <div class="cloud"></div>
        <a href="/talks">
          tech talks
        </a>
        <a href="/blogs">
          o for blogs' sake
          </a>
        {/* <a href="/resources">
          resources I ♡!
          </a> */}
          <SocialMedia />
          </div>
    )
  }
