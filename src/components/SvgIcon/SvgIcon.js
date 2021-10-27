import SvgIconStyle from "./SvgIcon.module.less";

function SvgIcon({ iconClass }) {

  const iconName = `#icon-${iconClass}`;

  return (
    <svg className={SvgIconStyle.svg} aria-hidden="true">
      <use xlinkHref={iconName} />
    </svg>
  )
}

export default SvgIcon;