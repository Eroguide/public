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
`

export const Search = styled.div`
  height: 64px;
  width: 64px;
  position: relative;
  background-color: ${({ theme }) => theme.primary[1]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
