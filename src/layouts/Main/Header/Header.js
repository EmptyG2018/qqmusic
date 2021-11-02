import SvgIcon from "../../../components/SvgIcon";
import HeaderStyle from "./Header.module.less";
import Search from "./Search";
const Header = () => {

  const avatar = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F15%2F20171215221023_KiYWM.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638202234&t=ffcedd82b53d17b53e6cc24ced7b7709";

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
        <Search /> 
      </div>
      <div className={HeaderStyle.aside}>
        <div className={HeaderStyle.user}>
          <img className={HeaderStyle.avatar} src={avatar} alt={avatar} />
          <div className={HeaderStyle.name}>会飞的小猪</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
