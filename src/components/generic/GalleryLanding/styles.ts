import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  padding: 104px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  margin: auto;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`
