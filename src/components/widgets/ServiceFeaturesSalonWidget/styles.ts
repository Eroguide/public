import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  padding: 0 64px;
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
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  text-align: center;
`

export const FeatureItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 800;
  color: ${({ theme }) => theme.grayScale[4]};
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 8px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
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