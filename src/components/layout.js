import React from "react"
import "./layout.css"

import NavBar from "./nav-bar"

const Layout = ({ children }) => (
  <div class="layout">
    <NavBar />
    {children}
    </div>
)

export default Layout
