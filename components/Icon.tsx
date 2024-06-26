type IconProps = {
  props?: any;
  iconName?: string;
  className?: string;
  style?: object;
};

const Icon = ({ props, iconName, className, style }: IconProps) => {
  return (
    <svg {...props} className={className} style={style}>
      <use href={`sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
