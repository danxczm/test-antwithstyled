import styled from '@emotion/styled';

type SvgIconProps = {
  icon?: string;
  width?: number;
  height?: number;
  color?: string;
};

const StyledSvg = styled.svg<SvgIconProps>`
  cursor: pointer;
  fill: ${({ color }) => color};
`;

const Icon = ({ icon, width = 20, height, ...props }: SvgIconProps) => {
  return (
    <StyledSvg {...props} width={width} height={height ?? width}>
      <use href={`sprite.svg#${icon}`} />
    </StyledSvg>
  );
};

export default Icon;
