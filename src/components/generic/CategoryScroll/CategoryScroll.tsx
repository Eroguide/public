import Slick from 'react-slick'
import {
  CategoryScrollMainContainer,
  CategoryScrollTitle,
  CardsRow,
} from './styles'
import { Card } from '@/src/components/generic/Card'
import { useStoreon } from '@/store/index'
import { FavoritesActions, FavoritesItems } from '@/store/favoritsModule'
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const CategoryScroll: React.FC = () => {
  const {
    dispatch,
    favorites: { items },
  } = useStoreon('favorites')

  const fixtures = [
    { id: '222dsadas', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asd', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadasd', slug: 'four-project-time', best: 0 },
    { id: '222dsadasss', slug: 'one-project-time', best: 1 },
    { id: 'asddsad222sadasssd', slug: 'two-project-time', best: 0 },
    { id: 'asdsad3242asdss', slug: 'three-project-time', best: 0 },
    { id: 'asdsdadasfffsadaddsd', slug: 'four-project-time', best: 0 },
  ]

  const handleAddFavorite = (data: FavoritesItems): void => {
    const { id, slug } = data
    dispatch(FavoritesActions.addItem, { id, slug })
  }

  return (
    <CategoryScrollMainContainer>
      <CategoryScrollTitle>New</CategoryScrollTitle>
      <CardsRow>
        <div>
          <Slick {...settings}>
            {fixtures.map((item, i) => (
              <Card
                key={item.id}
                {...item}
                isBest={!!item.best}
                isActive={items.some((element) => element.id === item.id)}
                handleAddFavorite={handleAddFavorite}
              />
            ))}
          </Slick>
        </div>
      </CardsRow>
    </CategoryScrollMainContainer>
  )
}
