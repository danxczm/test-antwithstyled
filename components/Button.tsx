'use client';

import React from 'react';
import { ButtonProps as AntButtonProps } from 'antd/lib/button/index';
import { Button as AntButton } from 'antd';
import classNames from 'classnames';
import styled from '@emotion/styled';

const ButtonStyled = styled(AntButton)`
  padding: 40px;
  &:hover {
    background: ${props => (props.disabled ? 'none' : 'tomato !important')};
  }
`;

const Button = ({ ...props }: AntButtonProps) => {
  return <ButtonStyled {...props} className={classNames(props.className)} />;
};

export default Button;
