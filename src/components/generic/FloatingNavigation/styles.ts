import styled from '@emotion/styled'

export const Container = styled.div`
  width: 296px;
  border-radius: 24px;
  position: absolute;
  right: 0;
  top: 32px;
  background: #ffffff;
  box-shadow: 0 24px 40px rgba(26, 26, 26, 0.16);
  z-index: 2000;
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  padding: 40px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px auto;
  background-color: ${({ theme }) => theme.grayScale[1]};
`

export const NavSection = styled.div`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
`

export const IconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  svg {
    stroke: ${({ theme }) => theme.grayScale[2]};
  }
`

export const Title = styled.span`
  color: ${({ theme }) => theme.grayScale[3]};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
`

export const Counter = styled.span`
  padding: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.grayScale[3]};
  border-radius: 8px;
  margin-left: 8px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  font-size: ${({ theme }) => theme.fontSize['xxs']};
`

export const NavItem = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  &:hover {
    cursor: pointer;
    ${Title} {
      color: ${({ theme }) => theme.grayScale[5]};
    }
    ${Counter} {
      color: ${({ theme }) => theme.grayScale[5]};
      border: 1px solid ${({ theme }) => theme.grayScale[5]};
    }
    svg {
      stroke: ${({ theme }) => theme.primary[0]};
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`
