import HeaderStyle from "./Header.module.less";
import SvgIcon from "../../../components/SvgIcon";
function Header() {

  return (
    <div className={HeaderStyle.header}>
      <div className={HeaderStyle.aside}>
        <div className={HeaderStyle.navigation}>
          <div className={`${HeaderStyle.navigation_btn} ${HeaderStyle.back}`}>
            <SvgIcon iconClass="arrow-right"></SvgIcon>
          </div>
          <div className={`${HeaderStyle.navigation_btn} ${HeaderStyle.next}`}>
            <SvgIcon iconClass="arrow-right"></SvgIcon>
          </div>
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
