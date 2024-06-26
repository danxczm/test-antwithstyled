import styled from '@emotion/styled';

type SvgIconProps = {
  icon?: string;
  width?: number;
  height?: number;
  color?: string;
};

const StyledSvg = styled.svg<SvgIconProps>`
  cursor: pointer;
  color: ${({ color }) => color};
`;

const Icon = ({ icon, width = 20, height, color, ...props }: SvgIconProps) => {
  return (
    <StyledSvg {...props} width={width} height={height ?? width} color={color}>
      <use href={`sprite.svg#${icon}`} />
    </StyledSvg>
  );
};

export default Icon;
