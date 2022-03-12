import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Inner = styled.div`
  width: calc((115px + 16px) * 4);
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.media.md`
 width: calc((115px + 16px) * 2);
  `}

  ${({ theme }) => theme.media.sm`
 width: calc((115px + 16px) * 4);
  `}
  ${({ theme }) => theme.media.mobile`
 width: calc((115px + 16px) * 2);
  `}
`

export const ParameterLabel = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ParameterValue = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ParameterItem = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-right: 16px;
  max-width: 115px;
  ${({ theme }) => theme.media.md`
    width: calc(100% / 2);
  `}
  ${({ theme }) => theme.media.sm`
   width: calc(100% / 4);
  `}
  ${({ theme }) => theme.media.mobile`
    width: calc(100% / 2);
  `}
`
