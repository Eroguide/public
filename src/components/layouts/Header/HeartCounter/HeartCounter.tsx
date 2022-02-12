import { HeartCounterWrapper, Counter } from './styles'
import HeartIcon from 'public/img/heart.svg'
import { useStoreon } from '@/store/index'
import HeartLinedIcon from '../../../../../public/img/heart-lined.svg'

export const HeartCounter: React.FC = () => {
  const {
    favorites: { items },
  } = useStoreon('favorites')
  console.log('items.length', items.length)
  return (
    <HeartCounterWrapper hasItems={Boolean(items.length)}>
      {Boolean(items.length) ? <HeartLinedIcon /> : <HeartIcon />}
      {items.length > 0 && <Counter>{items.length}</Counter>}
    </HeartCounterWrapper>
  )
}
