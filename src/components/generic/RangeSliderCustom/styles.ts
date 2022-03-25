import styled from '@emotion/styled'

export const MinMaxSlider = styled.div`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
`
export const ThumbWrapper = styled.div<{ isDragged: boolean }>`
  height: 16px;
  display: flex;
  width: 16px;
  border-radius: 50%;
  background-color: ${({ theme, isDragged }) =>
    isDragged ? theme.primary[1] : theme.primary[0]};
  border: none;
  justify-content: center;
  align-items: center;
  outline: none;
`

export const TrackWrapper = styled.div`
  height: 36px;
  display: flex;
  width: 100%;
`

// export const ThumbInner = styled.div<{ isDragged: boolean }>`
//   height: 16px;
//   width: 16px;
// `

export const TrackInner = styled.div<{ bg: string }>`
  height: 5px;
  width: 100%;
  border-radius: 4px;
  background: ${({ bg }) => `${bg}`};
  align-self: center;
`
