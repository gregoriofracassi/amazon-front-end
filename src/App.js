import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Route
        path="/addProduct"
        exact
        render={(props) => <ProductForm formType="add" {...props} />}
      />
      <Route
        path="/editProduct/:id"
        exact
        render={(props) => <ProductForm formType="edit" {...props} />}
      />
    </Router>
  );
};

export default App;
