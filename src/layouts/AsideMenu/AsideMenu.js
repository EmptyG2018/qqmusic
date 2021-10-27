import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuTitle from "./Menu/MenuTitle";
import MenuItem from "./Menu/MenuItem";
import AsideMenuStyle from "./AsideMenu.module.less";

const AsideMenu = () => {

  const [menus] = useState([
    {
      title: "在线音乐",
      list: [
        { to: "/recommend", title: "推荐" },
        { to: "/music_hall", title: "音乐馆" },
        { to: "/video", title: "视频" },
        { to: "/fm", title: "电台" },
      ]
    },
    {
      title: "我的音乐",
      list: [
        { to: "/live", title: "我喜欢" },
        { to: "/local", title: "本地歌曲" },
        { to: "/download", title: "下载歌曲" },
        { to: "/lately", title: "最近播放" },
        { to: "/cloud", title: "微云音乐网盘" },
      ]
    },
    {
      title: "创建的歌曲",
      list: [
        { to: "/", title: "国风" },
        { to: "/", title: "怀旧" },
        { to: "/", title: "国怀" },
        { to: "/", title: "钢琴曲" },
        { to: "/", title: "英文" },
        { to: "/", title: "DJ" },
        { to: "/", title: "非主流" },
      ]
    },
    {
      title: "收藏的歌曲",
      list: [
        { to: "/", title: "如果思念有声音" },
        { to: "/", title: "300首经典纯音乐1亿人点播收藏" }
      ]
    }
  ]);

  const renderMenu = () => {
    return menus.map((item, index) => (
      <Menu key={index}>
        <MenuTitle title={item.title} />
        {renderMenuItem(index)}
      </Menu>
    ));
  };

  const renderMenuItem = (index) => {
    return (
      <ul className={AsideMenuStyle.group_list}>
        {menus[index].list.map((item, index) => (
          <MenuItem to={item.to} title={item.title} key={index} />
        ))}
      </ul>
    );
  };

  return (
    <div className={AsideMenuStyle.aside_menu}>
      <Logo />
      <div className={AsideMenuStyle.group_wrap}>{renderMenu()}</div>
    </div>
  );  
}

export default AsideMenu;
