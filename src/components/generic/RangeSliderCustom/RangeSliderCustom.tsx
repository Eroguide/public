import { MinMaxSlider, ThumbWrapper, TrackInner, TrackWrapper } from './styles'
import { theme } from '@/src/theme'
import { getTrackBackground, Range } from 'react-range'
import { useState } from 'react'

export const RangeSliderCustom: React.FC<{
  min?: number
  max?: number
  step?: number
  getValue?: (value: Array<number>) => void
}> = ({ min = 1, max = 4, step = 1 }) => {
  const [value, setValue] = useState<Array<number>>([min, max])
  const pink = theme.primary[0]
  const gray = theme.grayScale[2]

  return (
    <MinMaxSlider>
      <Range
        values={value}
        step={step}
        min={min}
        allowOverlap={false}
        max={max}
        onChange={(values) => setValue(values)}
        renderTrack={({ props, children }) => (
          <TrackWrapper
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
          >
            <TrackInner
              ref={props.ref}
              bg={getTrackBackground({
                values: value,
                colors: [gray, pink, gray],
                min: min,
                max: max,
              })}
            >
              {children}
            </TrackInner>
          </TrackWrapper>
        )}
        renderThumb={({ props, isDragged }) => (
          <ThumbWrapper
            {...props}
            style={{
              ...props.style,
            }}
            isDragged={isDragged}
          >
            {/*<div*/}
            {/*  style={{*/}
            {/*    position: 'absolute',*/}
            {/*    top: '-28px',*/}
            {/*    color: '#fff',*/}
            {/*    fontWeight: 'bold',*/}
            {/*    fontSize: '14px',*/}
            {/*    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',*/}
            {/*    padding: '4px',*/}
            {/*    borderRadius: '4px',*/}
            {/*    backgroundColor: '#548BF4',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {value[0].toFixed(1)}*/}
            {/*</div>*/}
            {/*<div*/}
            {/*  style={{*/}
            {/*    height: '16px',*/}
            {/*    width: '5px',*/}
            {/*    backgroundColor: isDragged ? '#548BF4' : '#CCC',*/}
            {/*  }}*/}
            {/*/>*/}
            {/*// <ThumbInner isDragged={isDragged} />*/}
          </ThumbWrapper>
        )}
      />
      <output style={{ marginTop: '30px' }} id="output">
        {value[0].toFixed(1)}
      </output>
    </MinMaxSlider>
  )
}
