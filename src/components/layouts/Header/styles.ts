import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 500;
  background-color: #fff;
  align-items: center;
  ${({ theme }) => theme.media.md`
  padding: 0 32px;
  `}
  ${({ theme }) => theme.media.sm`
  padding: 0;
  `} ${({ theme }) => theme.media.mobile`
  padding: 0;
    `}
`

export const HeaderInner = styled.div`
  height: 88px;
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 32px;

  ${({ theme }) => theme.media.md`
    padding: 0;
    width: calc(100% - 32px * 2);
  `}
  ${({ theme }) => theme.media.sm`
    padding: 0;
    width: calc(100% - 32px * 2);
  `}
  ${({ theme }) => theme.media.mobile`
  padding: 0 16px;
  `}
`

export const Logo = styled.img`
  width: 130px;
  height: 24px;
  cursor: pointer;
`

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #ebebf0;
  margin: 0 40px;
`

export const NavLink = styled.a`
  ${({ theme }) => theme.typography.pm};
  color: #a0a0b0;
`

export const LocationText = styled.p`
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.grayScale[3]};
  font-weight: 600;
`

export const BurgerButton = styled.div`
  margin-left: 40px;
  width: 24px;
  height: 24px;
  position: relative;
`

export const MobileFloatMenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  inset: 87px 0 0 0;
`

export const LeftBlock = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 50%;
  justify-content: flex-start;
  align-items: center;
  ${NavLink} {
    margin-right: 40px;
  }
`

export const RightBlock = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 50%;
  justify-content: flex-end;
  align-items: center;
  ${NavLink} {
    margin-left: 40px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`

export const MapPinIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }
  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[4]};
    }
  }
  &:active {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[5]};
    }
  }
`

export const BurgerIconWrapper = styled.div`
  ${({ theme }) => theme.typography.pm};
  color: #a0a0b0;
  cursor: pointer;
  position: relative;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }
  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[4]};
    }
  }
  &:active {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[5]};
    }
  }
`
