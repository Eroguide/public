import styled from '@emotion/styled'

export const FooterContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[1]};
  border-top: 1px solid ${({ theme }) => theme.grayScale[1]};
  width: 100%;
  min-height: 176px;
  height: auto;
  display: flex;
  padding-left: 40px;
  margin-top: 100px;
`

export const FooterInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.mobile`
   flex-direction: column;
  `}
`

export const FooterLogo = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: flex-start;
  ${({ theme }) => theme.media.mobile`
   margin-left: 0;
   justify-content: flex-start;
    width: 100%;
  `}
`

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
  width: 60%;
  a {
    margin-top: 16px;
    color: ${({ theme }) => theme.grayScale[3]};
    text-decoration: none;
  }

  ${({ theme }) => theme.media.mobile`
   margin-left: 0;
   width: 100%;
  `}
`

export const LinkGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 25%;

  ${({ theme }) => theme.media.md`
     width: 50%;
  `}
  ${({ theme }) => theme.media.sm`
     width: 50%;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 50%;
  `}
`

export const FooterCta = styled.div`
  margin-right: 10%;
  display: flex;
  width: 20%;
  min-width: 110px;
  justify-content: flex-end;
  text-align: center;
  ${({ theme }) => theme.media.md`
     margin-right: 0;
  `}
  ${({ theme }) => theme.media.sm`
  margin-right: 0;
  `}
  ${({ theme }) => theme.media.mobile`
  margin-right: 0;
  padding: 50px 0;
  width: 100%;
  justify-content: flex-start;
  `}
`

export const TitleCta = styled.p`
  color: ${({ theme }) => theme.grayScale[5]};
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 600;
`

export const SubTitleCta = styled.p`
  color: ${({ theme }) => theme.grayScale[3]};
  font-size: ${({ theme }) => theme.fontSize['xxs']};
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
  color: ${({ theme }) => theme.grayScale[0]};
  background-color: ${({ theme }) => theme.primary[0]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize['s']};
`

export const UnderFooter = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-between;
`

export const UnderFooterLeft = styled.div`
  width: 60%;
  display: flex;
  color: ${({ theme }) => theme.grayScale[4]};
  font-size: ${({ theme }) => theme.fontSize['xs']};
`

export const UnderFooterRight = styled.div`
  width: 40%;
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  a {
    margin-top: 16px;
    color: ${({ theme }) => theme.grayScale[4]};
    font-size: ${({ theme }) => theme.fontSize['xs']};
    text-decoration: none;
    margin-left: 8px;
  }

  ${({ theme }) => theme.media.md`
    margin-right: 0;
  `}

  ${({ theme }) => theme.media.sm`
    margin-right: 0;
  `} 
  
  ${({ theme }) => theme.media.mobile`
    margin-right: 0;
  `}
`
