import styled from '@emotion/styled'

export const JournalContentWrapper = styled.div`
  display: flex;
  max-width: 1280px;
`

export const FilterColumn = styled.div`
  display: flex;
  width: 100%;
  max-width: calc((100% - 628px) / 2);
  margin-left: 24px;

  ${({ theme }) => theme.media.md`
     max-width: 100%;
  `}
  ${({ theme }) => theme.media.sm`
     max-width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
      max-width: 100%;
  `}
`

export const TagFilterWidgetContainer = styled.div`
  width: 272px;
  height: auto;
  border-radius: 32px;
  box-shadow: 0 4px 8px rgba(26, 26, 26, 0.2);
  position: sticky;
  align-self: start;
  top: 150px;
  z-index: 300;
  background-color: ${({ theme }) => theme.grayScale[0]};

  ${({ theme }) => theme.media.md`
      width: 100%;
      top: 88px;
  `}
  ${({ theme }) => theme.media.sm`
      width: 100%;
      top: 88px;
  `}
  ${({ theme }) => theme.media.mobile`
      width: 100%;
      top: 88px;
  `}
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 24px;
  flex-flow: row wrap;
  ${({ theme }) => theme.media.md`
     justify-content: center;
  `}
  ${({ theme }) => theme.media.sm`
     justify-content: center;
  `}
  ${({ theme }) => theme.media.mobile`
 justify-content: center;
  `}
`

export const Tag = styled.div`
  color: ${({ theme }) => theme.grayScale[4]};
  background-color: ${({ theme }) => theme.grayScale[1]};
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  ${({ theme }) => theme.typography.pl};
  font-weight: 600;
  cursor: pointer;
  margin: 4px;
  span {
    margin-left: 8px;
  }
  &:hover {
    color: ${({ theme }) => theme.grayScale[4]};
    background-color: ${({ theme }) => theme.grayScale[1]};
    border: 2px solid ${({ theme }) => theme.grayScale[4]};
  }
  &:active {
    color: ${({ theme }) => theme.grayScale[5]};
    background-color: ${({ theme }) => theme.grayScale[2]};
    border: 2px solid ${({ theme }) => theme.grayScale[2]};
  }
`
