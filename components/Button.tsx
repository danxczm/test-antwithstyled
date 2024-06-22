'use client';

import React from 'react';
import { Button as AntButton } from 'antd';

import classNames from 'classnames';
import styled from '@emotion/styled';

const ButtonStyled = styled(AntButton)`
  /* Button Text */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  /* Background */
  width: 448px;
  height: 56px;
  padding: var(--L, 16px) var(--3, 24px);
  border-radius: 8px;

  &.ant-btn-default {
    color: #007aff;
    border: var(--2XS, 2px) solid var(--State-color-blue, #007aff);
  }

  &.ant-btn-default:active {
    border: var(--2XS, 2px) solid var(--Button-Pressed, #006de5);
    background: #f4f8ff;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.25) inset;
  }

  &.ant-btn-primary:active {
    background: #006de5 !important;
    box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25) inset;
  }
`;

const Button = ({ ...props }) => {
  return <ButtonStyled {...props} className={classNames(props.className)} />;
};

export default Button;
