import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductForm from "./components/ProductForm"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/addProduct" component={ProductForm} />
    </Router>
  )
}

export default App
