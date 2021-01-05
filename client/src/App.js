import React, { useState, useEffect } from "react"
import { Current } from "./components/Current"
import { Prior } from "./components/Prior"

export const App = () => {
  return(
    <>
      <div>
        <Current />
      </div>
      <div>
        <Prior />
      </div>
    </>
  )
}
