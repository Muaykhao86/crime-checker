import React, { useEffect, useState } from "react";
import useInput from "./hooks/inputHook";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CrimeContext from "./contexts/collections/crimeData";
import "halfmoon/css/halfmoon.min.css";
import * as halfmoon from "halfmoon";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// make fonts and icons available overwhole app
library.add(fab, fas, far);
console.log({ fab, far, fas });

function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <>
    
    {/* Page Wrapper */}
      <div data-sidebar-hidden="hidden" className="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom">
        {/* Alerts Need to Have Parent here */}
        <div className="sticky-alerts"></div>
        {/* NAvBar */}
        <Nav />
        {/* SIDEBAR */}
        <Sidebar />
        {/* MAIN PAGE CONTENT */}
        <Content />
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default App;
