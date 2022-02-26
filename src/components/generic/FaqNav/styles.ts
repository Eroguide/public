import styled from '@emotion/styled'

export const Container = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  ${({ theme }) => theme.media.md`
      width: 30%;
  `}
  ${({ theme }) => theme.media.sm`
      width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
`

export const NavItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
  &:hover {
    cursor: pointer;
    svg {
      fill: ${({ theme }) => theme.grayScale[5]};
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
  svg {
    fill: ${({ theme }) => theme.grayScale[3]};
  }
`

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[3]};
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
