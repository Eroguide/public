import {
  MinMaxSlider,
  ThumbWrapper,
  TrackInner,
  TrackWrapper,
  MinMaxValue,
  MinMaxValueLeft,
} from './styles'
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
              <MinMaxValue>{max}+</MinMaxValue>
              <MinMaxValueLeft>{min}</MinMaxValueLeft>
              {children}
            </TrackInner>
          </TrackWrapper>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <ThumbWrapper
            {...props}
            style={{
              ...props.style,
            }}
            isDragged={isDragged}
          >
            <div
              style={{
                position: 'absolute',
                display:
                  value[index] === max || value[index] === min
                    ? 'none'
                    : 'block',
                top: '17px',
                color: '#111',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '24px',
                fontFamily: 'Inter,Helvetica,sans-serif',
                padding: '0 4px',
                borderRadius: '4px',
                backgroundColor: '#fff',
              }}
            >
              {value[index].toFixed()}
            </div>
          </ThumbWrapper>
        )}
      />
    </MinMaxSlider>
  )
}
