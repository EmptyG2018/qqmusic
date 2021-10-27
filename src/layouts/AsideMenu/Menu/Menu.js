import { Fragment } from "react";
import MenuStyle from "./Menu.module.less";

const Menu = ({ children }) => {
  return <Fragment>
    <div className={MenuStyle.menu}>
      {children}
    </div>
  </Fragment>
}

export default Menu;