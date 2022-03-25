import styled from '@emotion/styled'

export const FaqNavContainer = styled.div`
  width: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  ${({ theme }) => theme.media.md`
      width: 30%;
  `}
  ${({ theme }) => theme.media.sm`
      width: 30%;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
`

export const NavItem = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }

  ${({ isActive, theme }) =>
    isActive &&
    `svg path {
      stroke: ${theme.grayScale[5]};
    }
    span {
      color: ${theme.grayScale[5]};
    }`}

  &:hover {
    cursor: pointer;
    svg path {
      stroke: ${({ theme }) => theme.grayScale[5]};
    }

    span {
      color: ${({ theme }) => theme.grayScale[5]};
    }
  }
`

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`

export const Label = styled.span`
  ${({ theme }) => theme.typography.pm};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[3]};
  height: 24px;
  display: flex;
  align-items: center;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
