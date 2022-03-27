import { TagFilterWidgetContainer, Inner, Tag } from './styles'
import { useState } from 'react'

export const TagFilterWidget: React.FC = () => {
  const tagList = [
    { id: '1dsadasd', name: 'All posts' },
    { id: '1dsadaSalonsd', name: 'Salon' },
    { id: 'sds', name: 'Private' },
    { id: '1dsadadddsd', name: 'Boobs' },
    { id: '1dsxcdddddddddadasd', name: 'Promo' },
    { id: '1dsddddddddaasddasd', name: 'Masseuse' },
  ]

  const [isActiveTag, setIsActiveTag] = useState<string>('1dsadasd')

  return (
    <TagFilterWidgetContainer>
      <Inner>
        {tagList.map(({ id, name }) => (
          <Tag
            onClick={() => setIsActiveTag(id)}
            key={id}
            isActive={isActiveTag === id}
          >
            {name}
          </Tag>
        ))}
      </Inner>
    </TagFilterWidgetContainer>
  )
}
