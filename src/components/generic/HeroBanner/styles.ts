import styled from '@emotion/styled'

export const HeroBannerContainer = styled.div`
  height: 776px;
  width: 100%;
  padding: 0 80px;
  display: flex;
  flex-flow: column wrap;
  background: #f0f0f0 url('/img/placeholder-image.png') no-repeat center center;
  background-size: cover;
  border-radius: 24px;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #808080;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const HeroTitle = styled.h1`
  font-size: 96px;
  font-weight: 800;
  color: #40404a;
  margin: 0;
  max-width: 500px;
  line-height: 80px;
`

export const HeroSubtitle = styled.h2`
  margin: 40px 0 0 0;
  font-size: 24px;
  font-weight: 600;
  color: #ff005d;
  max-width: 500px;
`
