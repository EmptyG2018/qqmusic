import SearchStyle from "./Search.module.less";
import SvgIcon from "../../../../components/SvgIcon";

const Search = () => {
  return (
    <div className={SearchStyle.search}>
      <div className={SearchStyle.icon}>
        <SvgIcon iconClass="search" size={16} color="#9c9c9c" />
      </div>
      <div className={SearchStyle.control}>
        <input type="text" placeholder="搜索音乐" />
      </div>
      <div className={SearchStyle.icon}>
        <SvgIcon iconClass="close" size={14} color="#9c9c9c" />
      </div>
    </div>
  )
}

export default Search;