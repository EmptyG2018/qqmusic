import { useState, useEffect } from "react";
import SvgIcon from "../../../components/SvgIcon";
import PlayBarStyle from "./PlayBar.module.less";

function PlayBar() {
  const [ welcome, setWelcome ] = useState(0);

  useEffect(() => {
    // alert();
  })

  return (
    <div className={PlayBarStyle.bar}>
      <div className={PlayBarStyle.progress_bar}></div>
      <div className={PlayBarStyle.music_bar}>
        <div className={PlayBarStyle.music_info}>
          <div className={PlayBarStyle.music_thumb}></div>
          <div className={PlayBarStyle.music_cell}>
            <div className={PlayBarStyle.music_title}>凉凉<span className={PlayBarStyle.music_author}> - 杨宗纬 / 张碧晨</span></div>
            <div className={PlayBarStyle.music_action}>
            </div>
          </div>
        </div>
        <div className={PlayBarStyle.music_controls}>
          <div className={`${PlayBarStyle.control_item} ${PlayBarStyle.control_item_sm}`}>
            <SvgIcon iconClass="switch" size={14} />
          </div>
          <div className={`${PlayBarStyle.control_item} ${PlayBarStyle.control_item_md}`}>
            <SvgIcon iconClass="play_before" size={16} />
          </div>
          <div className={`${PlayBarStyle.control_item} ${PlayBarStyle.control_item_lg} ${PlayBarStyle.control_item_cir}`}>
            <SvgIcon iconClass="play" size={36}  />
          </div>
          <div className={`${PlayBarStyle.control_item} ${PlayBarStyle.control_item_md}`}>
            <SvgIcon iconClass="play_after" size={16} />
          </div>
          <div className={`${PlayBarStyle.control_item} ${PlayBarStyle.control_item_sm}`}>
            <SvgIcon iconClass="volume" size={14} />
          </div>
        </div>
        <div className={PlayBarStyle.music_fun}>wwww</div>
      </div>
    </div>
  );
}

export default PlayBar;
