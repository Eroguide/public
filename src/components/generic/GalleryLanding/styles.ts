import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: 70vh;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['extra']};
  font-weight: 600;
  color: ${({ theme }) => theme.primary[0]};
  margin-bottom: 56px;
  ${({ theme }) => theme.media.mobile`
  font-size: ${theme.fontSize['extraMobile']};
  `}
`

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[4]};
  max-width: 50%;
  margin: auto;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
