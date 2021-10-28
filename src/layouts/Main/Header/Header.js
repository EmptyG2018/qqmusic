import Button from "../../../components/Button";
import SvgIcon from "../../../components/SvgIcon";
import HeaderStyle from "./Header.module.less";
function Header() {

  return (
    <div className={HeaderStyle.header}>
      <div className={HeaderStyle.aside}>
        <div className={HeaderStyle.navigation}>
          <Button icon="logo"></Button>
          <Button icon="logo">window</Button>
          <SvgIcon iconClass="logo" size="45" color="red" />
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
