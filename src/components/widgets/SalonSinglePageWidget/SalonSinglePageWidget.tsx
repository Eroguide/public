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
} from './styles'
import AttentionIcon from '../../../../public/img/attention-icon.svg'
import GlobusIcon from '../../../../public/img/globus-icon.svg'
import LocationIcon from '../../../../public/img/location-pin-icon.svg'
import { CustomButton } from '@/components/generic'

export const SalonSinglePageWidget: React.FC = () => {
  return (
    <Container>
      <Inner>
        <SalonImage src="/img/bg.jpg" />
        <Row>
          <Left>
            <TitleSalon>Chocolate ladies club</TitleSalon>
          </Left>
          <Right>
            <RatingSalon>
              5.0 <AttentionIcon />
            </RatingSalon>
          </Right>
        </Row>
        <Row>
          <Left>
            <GlobusIcon />
            <GlobusText> chocolate ladies club</GlobusText>
          </Left>
        </Row>
        <Row>
          <Left>
            <LocationIcon />
            <LocationText>Prague 15</LocationText>
          </Left>
          <Right>
            <Link href="/map" passHref>
              <CustomButton
                iconRight
                isLink
                styleType="tertiary"
                sizeType="small"
              >
                Show map
              </CustomButton>
            </Link>
          </Right>
        </Row>
      </Inner>
    </Container>
  )
}
