import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 8px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const CardImage = styled.div`
  width: 78px;
  height: 78px;
  overflow: hidden;
  border-radius: 16px;
  background: gray url('/img/woman.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
`

export const Tag = styled.span`
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  height: 19px;
  overflow: hidden;
  border-bottom-right-radius: 32px;
  background-size: cover;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.primary[0]};
`

export const StatusTag = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  position: absolute;
  right: 2px;
  bottom: 2px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: ${({ theme }) => theme.support[2]};
`

export const Title = styled.p`
  margin-top: 8px;
  ${({ theme }) => theme.typography.ps};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`
