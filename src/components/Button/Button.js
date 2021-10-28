import SvgIcon from "../SvgIcon";
import ButtonStyle from "./Button.module.less";

const Button = ({ icon, size, children }) => {

  const onlyCircle = {
    large: { fontSize: 36 },
    middle: { fontSize: 16 },
    small: { fontSize: 14 }
  }

  const btn = {
    large: {  }
  }

  return (
    <button className={ButtonStyle.button}>
      {icon && <span className={ButtonStyle.icon}><SvgIcon iconClass={icon} /></span>}
      {children && <span>{children}</span> }
    </button>
  )
}

export default Button;