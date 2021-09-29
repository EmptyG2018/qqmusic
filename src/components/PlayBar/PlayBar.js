import { useState, useEffect } from "react";
import PlayBarStyle from "./PlayBar.module.less";

function PlayBar() {
  const [ welcome, setWelcome ] = useState(0);

  useEffect(() => {
    // alert();
  })

  return (
    <div className={PlayBarStyle.bar}>
    </div>
  );
}

export default PlayBar;
