import styled from '@emotion/styled'

export const HeroBannerContainer = styled.div`
  height: 776px;
  width: 100%;
  padding: 0 80px;
  display: flex;
  flex-flow: column wrap;
  background: #f0f0f0 url('/img/woman.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 24px;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #808080;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  ${({ theme }) => theme.media.md`
      height: 520px
  `}
  ${({ theme }) => theme.media.sm`
      height: 450px
  `}
  ${({ theme }) => theme.media.mobile`
      height: 320px
  `}
`

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[4]};
  margin: 0;
  max-width: 500px;
  line-height: 80px;

  ${({ theme }) => theme.media.mobile`
     font-size: ${theme.fontSize.extraMobile};
     line-height:${theme.fontSize.extraMobile};
  `}
`

export const HeroSubtitle = styled.h2`
  margin: 40px 0 0 0;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary[0]};
  max-width: 500px;
`

export const MobileTitleContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 146px;
`
