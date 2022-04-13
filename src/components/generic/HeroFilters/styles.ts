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
  box-shadow: 0 2.77px 2.21px rgba(199, 217, 244, 0.0141),
    0 6.65px 5.32px rgba(0, 0, 0, 0.0202),
    0 12.52px 10.02px rgba(0, 0, 0, 0.025),
    0 22.24px 17.87px rgba(0, 0, 0, 0.0298),
    0 41.78px 33.42px rgba(0, 0, 0, 0.0359), 0 100px 80px rgba(26, 26, 26, 0.05);
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
