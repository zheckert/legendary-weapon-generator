import React, { useState, useEffect } from "react"

import { Generator } from "./components/Generator"

//wrap all functions into context and move them out of here.

export const App = () => {
  const [weapons, setWeapons] = useState([])

  
  return(
    <div>
      <Generator />
    </div>
  )
}
