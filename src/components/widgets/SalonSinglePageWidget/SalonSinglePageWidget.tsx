import Link from 'next/link'
import {
  Container,
  Inner,
  TitleSalon,
  SalonImage,
  Row,
  Left,
  Right,
  GlobusText,
  LocationText,
  RatingSalon,
  GlobusWrapper,
  ExternalLink,
} from './styles'
import AttentionIcon from '/public/img/attention-icon.svg'
import GlobusIcon from '/public/img/globus-icon.svg'
import LocationIcon from '/public/img/location-pin-icon.svg'
import { CustomButton } from '@/components/generic'
import { GetSalon_getSalon } from '@/graphql/types/GetSalon'

export const SalonSinglePageWidget: React.FC<{ salon: GetSalon_getSalon }> = ({
  salon,
}) => {
  const { headPhoto, title, province, description, site, id } = salon

  return (
    <Container>
      <Inner>
        <Link href={'/salons/' + id} passHref>
          <SalonImage src={headPhoto ?? '/img/fake.png'} />
        </Link>
        <Row>
          <Left>
            <TitleSalon>{title}</TitleSalon>
          </Left>
          <Right>
            <RatingSalon>
              5.0 <AttentionIcon />
            </RatingSalon>
          </Right>
        </Row>
        <Row>
          <Left>
            <ExternalLink href={site} target="_blank">
              <GlobusWrapper>
                <GlobusIcon />
              </GlobusWrapper>
              <GlobusText>{description}</GlobusText>
            </ExternalLink>
          </Left>
        </Row>
        <Row>
          <Left>
            <LocationIcon />
            <LocationText>{province}</LocationText>
          </Left>
          <Right>
            <Link href={`/map?salonId=${id}`} passHref>
              <CustomButton
                iconRight
                isLink
                styleType="tertiary"
                sizeType="small"
              >
                map
              </CustomButton>
            </Link>
          </Right>
        </Row>
      </Inner>
    </Container>
  )
}
