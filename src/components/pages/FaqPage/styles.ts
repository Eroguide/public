import styled from '@emotion/styled'

export const FaqWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.media.mobile`
     flex-direction: column;
  `}
`

export const TitleSection = styled.section`
  max-width: 798px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 64px;
  ${({ theme }) => theme.media.mobile`
      width: 100%;
  `}
`

export const SmallTitle = styled.h5`
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[3]};
  font-weight: 500;
  margin-bottom: 8px;
`

export const LargeTitle = styled.h1`
  ${({ theme }) => theme.typography.extra};
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 8px;
  font-weight: 700;
  ${({ theme }) => theme.media.mobile`
  ${theme.typography.extraMobile};
  `};
  line-height: 92px;
`

export const MediumTitle = styled.h3`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 24px;
`

export const SubTitle = styled.h4`
  ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.grayScale[3]};
  max-width: 540px;
  margin: 0 auto 8px auto;
  font-weight: 400;
  a {
    color: ${({ theme }) => theme.support[0]};
    text-decoration: none;
  }
`

export const SelectWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`
