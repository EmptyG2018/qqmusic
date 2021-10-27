import { Fragment } from "react";
import MenuTitleStyle from "./MenuTitle.module.less";

const MenuTitle = ({ title }) => {
  return (
    <Fragment>
      <div className={MenuTitleStyle.menu_title}>{title}</div>
    </Fragment>
  )
}

export default MenuTitle;