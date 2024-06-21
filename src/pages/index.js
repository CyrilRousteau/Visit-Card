// src/pages/index.js
import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Carte de visite</h1>
      <Link to="/page2">Allez vers ma carte de visite</Link>
    </div>
  );
}