import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  padding: 104px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.md`
     padding: 64px;
  `}
  ${({ theme }) => theme.media.sm`
      padding: 0;
  `}
  ${({ theme }) => theme.media.mobile`
       padding: 0;
  `}
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
  ${({ theme }) => theme.typography.extra};
  font-weight: 800;
  color: ${({ theme }) => theme.primary[0]};
  margin-bottom: 56px;
  ${({ theme }) => theme.media.mobile`
    ${theme.typography.extraMobile};
  `}
`

export const DescriptionText = styled.p`
  ${({ theme }) => theme.typography.ps};
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
