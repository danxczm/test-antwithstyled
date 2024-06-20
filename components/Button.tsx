'use client';

import React from 'react';
import AntButton, {
  ButtonProps as AntButtonProps,
} from 'antd/lib/button/index';
import Tooltip from 'antd/lib/tooltip';
import classNames from 'classnames';
import styled from 'styled-components';

const ButtonStyled = styled(AntButton)`
  border: 1px solid #fff;
  margin-top: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: red;
  }
`;

type ButtonProps = AntButtonProps & {
  tooltipTitle?: React.ReactNode;
};

const Button = ({ tooltipTitle, ...props }: ButtonProps) => {
  const button = (
    <ButtonStyled {...props} className={classNames(props.className)} />
  );

  if (tooltipTitle) {
    return <Tooltip title={tooltipTitle}>{button}</Tooltip>;
  }
  return button;
};

export default Button;
