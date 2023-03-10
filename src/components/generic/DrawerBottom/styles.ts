import styled from '@emotion/styled'

export const DrawerBottomContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vh;
  transform: ${({ isOpen }) => (isOpen ? `translateY(0)` : `translateY(90vh)`)};
  transition: transform 0.2s ease-in-out;
  padding: 0 80px;
  display: flex;
  flex-flow: column wrap;
  background: ${({ theme }) => theme.grayScale[0]};
  border-radius: 32px 32px 0 0;
  justify-content: center;
  align-items: flex-start;
  z-index: 1001;
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

export const BgOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const InnerContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 860px;
  margin: auto;
  & {
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  overflow-y: scroll;
  padding-top: 64px;
  ${({ theme }) => theme.media.mobile`
     width: 100%;
  `}
`

export const TextContent = styled.p`
  color: ${({ theme }) => theme.grayScale[4]};
  ${({ theme }) => theme.typography.pm};
  margin: 56px auto;
  max-width: 700px;
  ${({ theme }) => theme.media.md`
    padding: 0 104px;
  `}
  ${({ theme }) => theme.media.sm`
    padding: 0 80px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 0 64px;
  `}
`
