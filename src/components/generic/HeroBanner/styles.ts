import styled from '@emotion/styled'

export const HeroBannerContainer = styled.div`
  height: 776px;
  width: 100%;
  //padding: 0 80px;
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  //border: 1px solid #808080;

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

  ${({ theme }) => theme.media.mobile`
    ${theme.typography.extraMobile}
      margin: 0 auto;
  `}
`

export const HeroSubtitle = styled.h2`
  margin: 40px 0 0 0;
  ${({ theme }) => theme.typography.h2};
  font-weight: 600;
  color: ${({ theme }) => theme.primary[0]};
  max-width: 368px;

  ${({ theme }) => theme.media.mobile`
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
  align-items: center;
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
  height: 100%;
  width: 50%;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

  ${({ theme }) => theme.media.mobile`
   width: 100%;  
   height: 320px;
  `}
`
