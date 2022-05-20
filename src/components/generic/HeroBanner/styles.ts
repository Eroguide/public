import styled from '@emotion/styled'

export const HeroBannerContainer = styled.div`
  height: 666px;
  width: 100%;
  display: flex;
  max-width: 1120px;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
  ${({ theme }) => theme.media.md`
      height: 520px;
       padding: 0 16px;
  `}
  ${({ theme }) => theme.media.sm`
      height: 450px;
       padding: 0 16px;
  `}
  ${({ theme }) => theme.media.mobile`
      height: auto;
      margin: 0 auto;
  `}
`

export const HeroTitle = styled.h1`
  ${({ theme }) => theme.typography.extra};
  font-weight: 700;
  color: ${({ theme }) => theme.grayScale[4]};
  margin: 0;
  max-width: 368px;

  ${({ theme }) => theme.media.sm`
    ${theme.typography.extraMobile}
  
  `}
  ${({ theme }) => theme.media.mobile`
    ${theme.typography.extraMobile}
      margin: 0 auto;
  `}
`

export const HeroSubtitle = styled.h2`
  margin: 16px 0 0 0;
  ${({ theme }) => theme.typography.h2};
  font-weight: 600;
  color: ${({ theme }) => theme.primary[0]};
  max-width: 368px;

  ${({ theme }) => theme.media.md`
   ${theme.typography.h3};
     max-width: 258px;
  `}
  ${({ theme }) => theme.media.sm`
   ${theme.typography.h4};
      max-width: 258px;
  `}
  ${({ theme }) => theme.media.mobile`
     ${theme.typography.h3};
      margin: 24px auto;
  `}
`

export const MobileTitleContainer = styled.div`
  margin-top: 40px;
`

export const HeroContentDesktop = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => theme.media.mobile`
     display: none;
  `}
`

export const HeroImage = styled.div`
  border-radius: 24px;
  height: calc(100% - 24px);
  margin-top: 24px;
  width: 50%;
  //& svg {
  //  width: 100%;
  //  height: auto;
  //}
  ${({ theme }) => theme.media.mobile`
   width: 100%;  
   height: auto;
  `}
`
