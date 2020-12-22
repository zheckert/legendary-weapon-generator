import React, { useState, useEffect } from "react"

import { Generator } from "./components/Generator"

export const App = () => {
  const [weapons, setWeapons] = useState([])

  return(
    <div>
      <Generator />
    </div>
  )
}
