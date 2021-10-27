import { Fragment } from "react";
import ViewStyle from "./View.module.less";

const View = ({ children }) => {
  return (
    <Fragment>
      <div className={ViewStyle.view}>
        {children}
      </div>
    </Fragment>
  )
}

export default View;
