import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  padding: 104px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.md`
     padding: 64px;
  `}
  ${({ theme }) => theme.media.sm`
      padding: 0;
  `}
  ${({ theme }) => theme.media.mobile`
       padding: 0;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 720px;
`

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extra};
  font-weight: 700;
  background: ${({ theme }) => theme.gradient[0]};
  line-height: 115px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 56px;
  ${({ theme }) => theme.media.mobile`
    ${theme.typography.extraMobile};
  `}
`

export const DescriptionText = styled.p`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[4]};
  width: 100%;
  margin: auto;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
