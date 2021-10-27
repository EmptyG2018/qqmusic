import { Fragment } from "react";
import LogoStyle from "./Logo.module.less";

const Logo = () => {
  return <Fragment>
    <div className={LogoStyle.logo}></div>
  </Fragment>
}

export default Logo;