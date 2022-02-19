import { HeartCounterWrapper, Counter } from './styles'
import HeartIcon from 'public/img/heart.svg'
import { useStoreon } from '@/store/index'
import HeartLinedIcon from '../../../../../public/img/heart-lined.svg'
import { useRouter } from 'next/router'

export const HeartCounter: React.FC = () => {
  const { push } = useRouter()
  const {
    favorites: { items },
  } = useStoreon('favorites')
  console.log('items.length', items.length)
  return (
    <HeartCounterWrapper
      onClick={() =>
        push('/favorites', undefined, {
          shallow: true,
        })
      }
      hasItems={Boolean(items.length)}
    >
      {Boolean(items.length) ? <HeartIcon /> : <HeartLinedIcon />}
      {items.length > 0 && <Counter>{items.length}</Counter>}
    </HeartCounterWrapper>
  )
}
