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

export const TitleSection = styled.div`
  max-width: 340px;
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
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.grayScale[4]};
  font-weight: 200;
  margin-bottom: 8px;
`
export const LargeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 8px;
`

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-bottom: 8px;
`

export const SelectWrapper = styled.h2`
  height: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: none;
  ${({ theme }) => theme.media.mobile`
     display:flex;
  `}
`
