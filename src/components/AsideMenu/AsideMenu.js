import { useState, useEffect } from "react";
import AsideMenuStyle from "./AsideMenu.module.less";


function AsideMenu() {
  const [ welcome, setWelcome ] = useState(0);

  useEffect(() => {
    // alert();
  })

  return (
    <div className={AsideMenuStyle.aside_menu}>
      <div className={AsideMenuStyle.logo}></div>
      <div className={AsideMenuStyle.group_wrap}>
        <div className={AsideMenuStyle.group}>
          <div className={AsideMenuStyle.group_header}>在线音乐</div>
            <ul className={AsideMenuStyle.group_list}>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>推荐</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>音乐馆</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>视频</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>电台</div>
              </li>
            </ul>
        </div>
        <div className={AsideMenuStyle.group}>
          <div className={AsideMenuStyle.group_header}>我的音乐</div>
            <ul className={AsideMenuStyle.group_list}>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>我喜欢</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>本地歌曲</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>下载歌曲</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>最近播放</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>微云音乐网盘</div>
              </li>
            </ul>
        </div>
        <div className={AsideMenuStyle.group}>
          <div className={AsideMenuStyle.group_header}>创建的歌曲</div>
            <ul className={AsideMenuStyle.group_list}>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>国风</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>怀旧</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>国怀</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>钢琴曲</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>英文</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>DJ</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>非主流</div>
              </li>
            </ul>
        </div>
        <div className={AsideMenuStyle.group}>
          <div className={AsideMenuStyle.group_header}>收藏的歌曲</div>
            <ul className={AsideMenuStyle.group_list}>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>如果思念有声音</div>
              </li>
              <li className={AsideMenuStyle.cell_item}>
                <div className={AsideMenuStyle.cell_title}>300首经典纯音乐1亿人点播收藏</div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default AsideMenu;
