import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  width: 100%;
  //width: calc(100% - 80px * 2);
  padding: 0 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 500;
  background-color: #fff;
  ${({ theme }) => theme.media.md`
  padding: 0 32px;
  `}
  ${({ theme }) => theme.media.sm`
  padding: 0 ;
  `} ${({ theme }) => theme.media.mobile`
  padding: 0 8px;
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
    padding: 0;
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
  font-size: 14px;
  color: #a0a0b0;
`

export const PersonalLink = styled.div`
  font-size: 14px;
  color: #a0a0b0;
  margin-left: 40px;
  cursor: pointer;
  svg {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }
  &:hover {
    svg {
      stroke: ${({ theme }) => theme.grayScale[4]};
    }
  }
  &:active {
    svg {
      stroke: ${({ theme }) => theme.grayScale[5]};
    }
  }
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
  margin-left: 26px;
`

export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
