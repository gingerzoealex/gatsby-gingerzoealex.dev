import React from "react"
import "../styles/foregroundStyles.css"
import { TopBar } from "./Navigation"

export const Foreground = () => {
  return (
    <div id="foregroundContainer" className="scrollWrapper">
      <TopBar />
    </div>
  )
}
