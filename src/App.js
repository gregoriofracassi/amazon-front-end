import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductForm from "./components/ProductForm"
import Header from "./components/Header"
import ProductPage from "./components/ProductPage"
import ListPage from "./components/ListPage"

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={ListPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route
        path="/addProduct"
        exact
        render={(props) => (
          <ProductForm formType="add" action="POST" {...props} />
        )}
      />
      <Route
        path="/editProduct/:id"
        exact
        render={(props) => (
          <ProductForm formType="edit" action="PUT" {...props} />
        )}
      />
    </Router>
  )
}

export default App
