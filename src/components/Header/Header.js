import HeaderStyle from "./Header.module.less";
function Header() {

  return (
    <div className={HeaderStyle.header}>
      <div className={HeaderStyle.aside}>
        <div className={HeaderStyle.navigation}>
          <div className={HeaderStyle.navigation_btn}></div>
          <div className={HeaderStyle.navigation_btn}></div>
        </div>
        <div className={HeaderStyle.search}></div>   
      </div>
      <div className={HeaderStyle.aside}>
        <div className={HeaderStyle.user}>
          <div className={HeaderStyle.avatar}></div>
          <div className={HeaderStyle.name}>QQ音乐</div>
        </div>
      </div>

    </div>
  )
}

export default Header;
