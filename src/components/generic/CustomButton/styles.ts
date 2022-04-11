import styled from '@emotion/styled'
// types
import { StyledComponentProps } from './types'

export const IconWrapperChevron = styled.span`
  display: flex;
  height: 24px;
  width: 24px;
  margin: 0 8px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.pm};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[2]};
`

export const Button = styled.button<StyledComponentProps>`
  width: ${({ width }) => (width ? width : 'auto')};
  margin: ${({ margin }) => (margin ? margin : null)};
  padding: ${({ theme, sizeType }) =>
    sizeType ? theme.button.padding[sizeType] : '12px 32px'};
  height: ${({ theme, sizeType }) =>
    sizeType ? theme.button.height[sizeType] : '48px'};
  background-color: ${({ theme, styleType }) =>
    theme.button.background[styleType]};
  color: ${({ theme, styleType }) => theme.button.color[styleType]};
  ${({ theme }) => theme.typography.pm};
  line-height: ${({ theme, sizeType }) =>
    sizeType ? theme.button.height[sizeType] : '24px'};
  position: relative;
  align-items: ${({ textAlign }) => textAlign ?? 'center'};

  z-index: 1;
  user-select: none;
  text-decoration: none;
  font-weight: 600;
  border-radius: 28px;
  display: flex;
  justify-content: ${({ iconRight, iconLeft }) =>
    iconRight || (iconLeft && 'space-between') || 'center'};
  flex-flow: row nowrap;
  border: ${({ theme, styleType }) => theme.button.border[styleType]};
  //max-width: 200px;
  cursor: pointer;

  ${({ disabled }) => disabled && 'border: none;  pointer-events: none;'};
  ${({ iconRight }) => iconRight && 'padding-right: 0;padding-left: 16px;'};
  ${({ iconLeft }) => iconLeft && 'padding-left: 0;padding-right: 16px;'};
  ${({ styleType }) => styleType === 'link' && 'padding: 0;'};
  svg path {
    stroke: ${({ theme, styleType }) => theme.button.icon[styleType]};
  }
  transition: background-color 0.1s ease-in-out,
    background-color 0.1s ease-in-out, color 0.1s ease-in-out,
    border 0.1s ease-in-out;
  &:hover {
    transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out,
      border 0.1s ease-in-out;
    background-color: ${({ theme, styleType }) =>
      theme.button.hover.background[styleType]};
    color: ${({ theme, styleType }) => theme.button.hover.color[styleType]};
    ${IconWrapperChevron} {
      svg path {
        stroke: ${({ theme, styleType }) => theme.button.hover.icon[styleType]};
      }
    }
    border: ${({ theme, styleType }) => theme.button.hover.border[styleType]};
  }
  &:active {
    transition: background-color 0.1s ease-in-out, border 0.1s ease-in-out,
      color 0.1s ease-in-out;
    background-color: ${({ theme, styleType }) =>
      theme.button.active.background[styleType]};
    color: ${({ theme, styleType }) => theme.button.active.color[styleType]};

    ${IconWrapperChevron} {
      svg path {
        stroke: ${({ theme, styleType }) =>
          theme.button.active.icon[styleType]};
      }
    }
    border: ${({ theme, styleType }) => theme.button.active.border[styleType]};
  }

  &:disabled {
    background: ${({ theme, styleType }) =>
      theme.button.disabled.background[styleType]};
    color: ${({ theme, styleType }) => theme.button.disabled.color[styleType]};
    cursor: not-allowed;
  }
  ${({ theme }) => theme.media.mobile`
     padding: 0 16px;
  `}
`
