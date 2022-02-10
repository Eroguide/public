import styled from '@emotion/styled'

export const FooterContainer = styled.div`
  border-bottom: 1px solid #f7f7f9;
  border-top: 1px solid #f7f7f9;
  width: 100%;
  height: 176px;
  display: flex;
  padding-left: 40px;
  margin-top: 100px;
`

export const FooterInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const FooterLogo = styled.div`
  width: 130px;
  height: 24px;
  img {
    width: 100%;
  }
`
export const FooterLinks = styled.div`
  display: flex;
  margin-left: 70px;
  font-size: 14px;
  font-weight: 600;
  a {
    margin-top: 16px;
    color: #a0a0b0;
    text-decoration: none;
  }
`

export const LinkGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 136px;
  justify-content: center;
`

export const FooterCta = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
`

export const TitleCta = styled.p`
  color: #1e1e29;
  font-size: 14px;
  font-weight: 600;
`

export const SubTitleCta = styled.p`
  color: #a0a0b0;
  font-size: 10px;
  margin-bottom: 16px;
`

export const ContentCta = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 110px;
`
export const FooterWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 70vh;
`

export const ButtonCta = styled.button`
  color: #fff;
  background-color: #ff005d;
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
`

export const UnderFooter = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  padding-left: 40px;
  align-items: center;
`

export const UnderFooterLeft = styled.div`
  width: 60%;
  display: flex;
  color: #40404a;
  font-size: 12px;
`

export const UnderFooterRight = styled.div`
  width: 30%;
  display: flex;
  a {
    margin-top: 16px;
    color: #40404a;
    font-size: 12px;
    text-decoration: none;
    margin-left: 8px;
  }
`
