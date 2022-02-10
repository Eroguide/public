import { HeartCounterWrapper, Counter } from './styles'
import HeartIcon from './assets/heart.svg'

export const HeartCounter: React.FC<{ counterValue: number }> = ({
  counterValue,
}) => {
  return (
    <HeartCounterWrapper>
      <HeartIcon />
      <Counter>{counterValue}</Counter>
    </HeartCounterWrapper>
  )
}
