import SvgIconStyle from "./SvgIcon.module.less";

function SvgIcon({ iconClass, size, color }) {

  const iconName = `#icon-${iconClass}`;

  return (
    <svg className={SvgIconStyle.svg} style={{ fontSize: size, color }} aria-hidden="true">
      <use xlinkHref={iconName} />
    </svg>
  )
}

export default SvgIcon;