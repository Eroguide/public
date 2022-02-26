import styled from '@emotion/styled'

export const TopLineContainer = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 24px;
`

export const ButtonShadow = styled.a`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 600;
  background-color: ${({ theme }) => theme.grayScale[0]};
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
  cursor: pointer;
  text-decoration: none;
`
export const IconWrapper = styled.span`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 8px;
`
export const BreadCrumbs = styled.div`
  display: flex;
`
