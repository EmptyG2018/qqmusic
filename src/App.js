import { useState, useEffect } from "react";
import "flex-layout";
import "./App.less";
import AppStyle from "./App.module.less";
import AsideMenu from "./components/AsideMenu";
import Main from "./components/Main/Main";


function App() {
  const [ welcome, setWelcome ] = useState(0);

  useEffect(() => {
    // alert();
  })

  return (
    <div className={AppStyle.App}>
      <AsideMenu />
      <Main />
    </div>
  );
}

export default App;
