import SvgIconStyle from "./SvgIcon.module.less";

function SvgIcon(props) {
  const { iconClass } = props;

  const iconName = `#icon-${iconClass}`;

  return (
    <svg className={SvgIconStyle.svg_icon}>
      <use xlinkHref={iconName} />
    </svg>
  )
}

export default SvgIcon;