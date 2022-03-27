import styled from '@emotion/styled'

export const AccordionItemContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  max-width: 628px;
`

export const ItemTitle = styled.h5`
  width: 100%;
  ${({ theme }) => theme.typography.h5};
  color: ${({ theme }) => theme.grayScale[4]};
  display: flex;
`

export const ItemContent = styled.div<{ isActive: boolean }>`
  width: 100%;
  padding: ${({ isActive }) => (isActive ? '6px 0 24px 0' : '0')};
  display: flex;
  height: ${({ isActive }) => (isActive ? 'auto' : '0')};
  overflow: hidden;
  border-top: ${({ theme, isActive }) =>
    isActive ? `1px ` : `0px ` + 'solid ' + theme.grayScale[1]};
  transition: 0.15s ease-in-out;
  position: relative;
  p {
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    transition: 0.15s ease-in-out;
  }
`

export const FaqText = styled.p`
  width: 100%;
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.grayScale[3]};
  text-align: left;
  transition: 0.15s ease-in-out;
`

export const ItemTop = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.grayScale[1]};
  padding: 24px 16px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const IconWrapper = styled.div<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    path {
      stroke: ${({ theme }) => theme.grayScale[2]};
    }
    transform: rotate(${({ isActive }) => (isActive ? '90deg' : '-90deg')});
    transition: transform 0.15s ease-in-out;
  }
`
