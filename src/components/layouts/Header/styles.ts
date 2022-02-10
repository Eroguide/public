import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  width: calc(100% - 80px * 2);
  position: fixed;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.9);
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

export const Logo = styled.div`
  width: 130px;
  height: 24px;
  img {
    width: 100%;
  }
`

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #ebebf0;
  margin: 0 40px;
`

export const NavLink = styled.span`
  font-size: 14px;
  color: #a0a0b0;
`

export const PersonalLink = styled.div`
  font-size: 14px;
  color: #a0a0b0;
  margin-left: 40px;
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
