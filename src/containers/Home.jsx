import React from "react";
import FormInput from "@components/Form";
import List from "@components/List";
import Welcome from "@components/Welcome/index";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <div className="App">
      <FormInput />
      <List />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Home;
