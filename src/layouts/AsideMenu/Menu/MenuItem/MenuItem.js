import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MenuItemStyle from "./MenuItem.module.less";

const MenuItem = ({ to, title }) => {
  return (
    <Fragment>
      <li className={MenuItemStyle.menu_item}>
        <NavLink exact className={MenuItemStyle.menu_item_link} to={to} activeClassName={MenuItemStyle.selected}>{title}</NavLink>
      </li>
    </Fragment>
  )
}

export default MenuItem;