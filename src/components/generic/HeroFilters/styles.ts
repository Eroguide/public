import styled from '@emotion/styled'

export const HeroFiltersContainer = styled.div`
  height: 144px;
  width: 100%;
  position: relative;
`

export const HeroFiltersInner = styled.div`
  height: 144px;
  width: 100%;
  margin: -77px auto 0 auto;
  max-width: 1120px;
  padding: 0 60px 0 40px;
  display: flex;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  ${({ theme }) => theme.media.md`
   margin: -35px auto 0 auto;
  `}
  ${({ theme }) => theme.media.sm`
  margin: -35px auto 0 auto;
  `}
`

export const Search = styled.span`
  height: 64px;
  width: 64px;
  position: relative;
  background-color: ${({ theme }) => theme.primary[1]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 7px 10px -5px rgb(255 0 93 / 60%);
  border: 2px solid ${({ theme }) => theme.primary[1]};
  transition: background-color 0.2s ease-in-out;

  svg path {
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.grayScale[0]};
    svg path {
      fill: ${({ theme }) => theme.primary[1]};
      transition: fill 0.2s ease-in-out;
    }
    transition: background-color 0.2s ease-in-out;
  }
  &:active {
    background-color: rgba(216, 14, 93, 0.05);
    transition: background-color 0.2s ease-in-out;
  }
`
