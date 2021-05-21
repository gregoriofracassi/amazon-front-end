import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import PostForm from "./components/PostForm"

const App = () => {
  return (
    <Router>
      <Route exact path="/addProduct" component={PostForm} />
    </Router>
  )
}
