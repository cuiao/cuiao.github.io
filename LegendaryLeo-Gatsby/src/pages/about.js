import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="About LegendaryLeo Studio" />
    <p>LegendaryLeo Studio is awesome!</p>
  </div>
)
