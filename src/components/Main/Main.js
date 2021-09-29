import { useState, useEffect } from "react";
import MainStyle from "./Main.module.less";
import PlayBar from "../PlayBar";


function Main() {
  const [ welcome, setWelcome ] = useState(0);

  useEffect(() => {
    // alert();
  })

  return (
    <div className={MainStyle.main}>
      <div className={MainStyle.main_wrap}>
      </div> 
      <PlayBar />
    </div>
  );
}

export default Main;
