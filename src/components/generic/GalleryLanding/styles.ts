import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 200px;
  ${({ theme }) => theme.media.mobile`
      margin-bottom: 48px;
`}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 860px;
`

export const HeroTitle = styled.h1`
  ${({ theme }) => theme.typography.extra};
  font-weight: 700;
  background: ${({ theme }) => theme.gradient[0]};
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
