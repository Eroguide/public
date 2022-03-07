import styled from '@emotion/styled'
import { headerHeight } from '@/src/components/layouts/Header/constants'
import { WrapperProps, InnerProps } from './types'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export const Layout = styled.div`
  //overflow: hidden;
  width: 100%;
  min-height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 80px;
  ${({ theme }) => theme.media.md`
    padding: 0 32px;
  `}
  ${({ theme }) => theme.media.sm`
    padding: 0 32px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 0 16px;
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  padding-top: ${headerHeight}px;
  padding-top: ${headerHeight}px;
  ${({ theme }) => theme.media.mobile`
    padding-top: 42px;
    padding-top: ${headerHeight}px;
  `}
  min-height: calc(100vh - ${headerHeight}px);
  min-height: calc(100vh - ${headerHeight}px);
  ${({ theme }) => theme.media.mobile`
    min-height: calc(100vh - 42px);
    min-height: calc(100vh - ${headerHeight}px);
  `}
`

export const Inner = styled.div<InnerProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${headerHeight}px;
  min-height: calc(100vh - ${headerHeight}px);
`
