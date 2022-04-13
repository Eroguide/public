import styled from '@emotion/styled'

export const HeroBannerContainer = styled.div`
  height: 776px;
  width: 100%;
  display: flex;

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
      height: 320px;
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
  background: #f0f0f0 url('/photos/img_13.png') no-repeat center center;
  background-size: cover;
  border-radius: 24px;
  height: calc(100% - 24px);
  margin-top: 24px;
  width: 50%;
  filter: drop-shadow(0px 0.91px 2.21px rgba(0, 0, 0, 0.0197))
    drop-shadow(0px 2.19px 5.32px rgba(0, 0, 0, 0.0283))
    drop-shadow(0px 4.13px 10.02px rgba(0, 0, 0, 0.035))
    drop-shadow(0px 7.37px 17.87px rgba(0, 0, 0, 0.0417))
    drop-shadow(0px 13.79px 33.42px rgba(0, 0, 0, 0.0503))
    drop-shadow(0px 33px 80px rgba(0, 0, 0, 0.07));

  ${({ theme }) => theme.media.mobile`
   width: 100%;  
   height: 320px;
  `}
`
