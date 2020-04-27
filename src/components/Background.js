import React from "react"
import { Square } from "./BackgroundShapes"
import "../styles/backgroundStyles.css"

export const Background = () => {
  return (
    <React.Fragment>
      <div id="backgroundContainer" className="scrollWrapper2">
        <Square />
      </div>
    </React.Fragment>
  )
}
