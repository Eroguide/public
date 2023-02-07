import {
  Container,
  IconWrapper,
  Row,
  Title,
  FeatureList,
  FeatureItem,
  Wrapper,
} from './styles'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { breakpoints, BreakpointsEnum } from '@/src/theme'
import { CustomButton } from '@/components/generic'
import { useState } from 'react'
import { ListSalons_listSalons_edges_node_advantages } from '@/graphql/types/ListSalons'

export const ServiceFeaturesSalonWidget: React.FC<{
  advantages: Array<ListSalons_listSalons_edges_node_advantages>
}> = ({ advantages }) => {
  const isSmall = useBreakpoint({
    min: breakpoints[BreakpointsEnum.xxs].min,
    max: breakpoints[BreakpointsEnum.sm].max,
  })
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <Wrapper>
      <Container>
        <Row>
          <Title>Service features</Title>
        </Row>
        <FeatureList>
          {advantages.map(
            ({ id, name, image }, i) =>
              i < ((!showMore && isSmall && 4) || 10) && (
                <FeatureItem key={id + '-' + name}>
                  <IconWrapper>
                    <Image
                      src={image ?? '/img/fake.png'}
                      alt={name + 'service-advantages'}
                      width={40}
                      height={40}
                    />
                  </IconWrapper>
                  <span>{name}</span>
                </FeatureItem>
              )
          )}
          {isSmall && (
            <CustomButton
              onClick={() => setShowMore(!showMore)}
              styleType="tertiary"
              width="100%"
              margin="40px 0 0 0"
            >
              {!showMore ? 'Show All' : 'Hide'}
            </CustomButton>
          )}
        </FeatureList>
      </Container>
    </Wrapper>
  )
}
