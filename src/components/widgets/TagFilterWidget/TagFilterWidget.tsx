import { TagFilterWidgetContainer, Inner, Tag } from './styles'

export const TagFilterWidget: React.FC = () => {
  return (
    <TagFilterWidgetContainer>
      <Inner>
        <Tag>All posts</Tag>
        <Tag>Salon</Tag>
        <Tag>Private</Tag>
        <Tag>Boobs</Tag>
        <Tag>Promo</Tag>
        <Tag>Masseuse</Tag>
      </Inner>
    </TagFilterWidgetContainer>
  )
}
