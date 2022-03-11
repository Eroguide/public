import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const ParameterItem = styled.div`
  max-width: 115px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  justify-content: space-between;
  margin-right: 16px;
  ${({ theme }) => theme.media.md`
    width: calc(100% / 4 - 16px);
  `}
  ${({ theme }) => theme.media.sm`
 
   width: calc(100% /  2  - 16px);
  `}
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 16px;
    width: calc(100% /  2  - 16px);
  `}
`
