import SvgIcon from "../SvgIcon";
import IconStyle from "./Icon.module.less";

const Icon = ({ icon, color, size }) => {
  return (
    <span className={IconStyle.icon}><SvgIcon iconClass={icon} color={color} size={size} /></span>
  )
}

export default Icon;