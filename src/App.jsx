import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";

function App() {
  return (
    <>
      <div className="m max-w-[1440px] mx-auto p-4">
        <Header></Header>
        <div className="md:flex ">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
