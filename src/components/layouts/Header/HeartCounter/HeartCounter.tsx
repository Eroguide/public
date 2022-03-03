import { HeartCounterWrapper, Counter } from './styles'
import { useStoreon } from '@/store/index'
import HeartAnimated from '/public/img/heart-counter-icon.svg'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const HeartCounter: React.FC = () => {
  const { push } = useRouter()
  const {
    favorites: { items },
  } = useStoreon('favorites')

  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (items.length > 0) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [items])

  return (
    <HeartCounterWrapper
      onClick={() =>
        push('/favorites', undefined, {
          shallow: true,
        })
      }
      hasItems={isActive}
    >
      <HeartAnimated />
      {isActive && <Counter>{items.length}</Counter>}
    </HeartCounterWrapper>
  )
}
