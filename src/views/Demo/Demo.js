import { Fragment } from "react";
import Icon from "../../components/Icon";
import DemoStyle from "./Demo.module.less";

const Demo = () => {
  return (
    <Fragment>
      <div className={DemoStyle.demo}>
        <Icon icon="loop" size={18} />
        <Icon icon="logo" size={72} color="red" />
      </div>
    </Fragment>
  )
}

export default Demo;