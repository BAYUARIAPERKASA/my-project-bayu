import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex flex-1">
          <Sidebar /> {/* Sidebar selalu terlihat */}
          <Main />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/* link install : https://tailwindcss.com/docs/guides/create-react-app */
