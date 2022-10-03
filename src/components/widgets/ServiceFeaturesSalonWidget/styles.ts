import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Row = styled.div`
  width: 100%;
  margin: 32px 0;
  min-height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:first-of-type {
    margin-top: 0;
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  text-align: center;
`

export const FeatureItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  span {
    ${({ theme }) => theme.typography.pm};
    font-weight: 400;
    color: ${({ theme }) => theme.grayScale[4]};
  }
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.media.sm`
  max-width: 279px;
  `}
  ${({ theme }) => theme.media.mobile`
   max-width: 279px;
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  padding: 8px;
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  margin-bottom: 24px;
  padding: 64px 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  justify-content: center;
  ${({ theme }) => theme.media.md`
   padding:  64px 48px;
  `}
  ${({ theme }) => theme.media.sm`
   padding: 64px  32px;
  `}
  ${({ theme }) => theme.media.mobile`
   padding: 64px 16px;
  `}
`
