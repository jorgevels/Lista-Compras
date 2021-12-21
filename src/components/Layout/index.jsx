import React from "react";
import PropTypes from "prop-types";

/* import Header from "../../Header/components/App"; */
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <Footer />
    {children}
  </>
);

Layout.propTypes = { children: PropTypes.element };

export default Layout;
