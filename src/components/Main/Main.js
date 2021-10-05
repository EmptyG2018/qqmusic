import { useState, useEffect } from "react";
import MainStyle from "./Main.module.less";
import Header from "../Header";
import PlayBar from "../PlayBar";


function Main() {
  const [ welcome, setWelcome ] = useState(0);

  useEffect(() => {
    // alert();
  })

  return (
    <div className={MainStyle.main}>
      <Header />
      <div className={MainStyle.main_wrap}>
      </div> 
      <PlayBar />
    </div>
  );
}

export default Main;
