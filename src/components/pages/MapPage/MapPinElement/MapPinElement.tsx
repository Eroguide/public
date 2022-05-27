import { Coords } from 'google-map-react'
import { MapPin, MapPinLeg, MapPinWrapper } from './styles'

export const MapPinElement: React.FC<
  Coords & { type: string; handlePinClick: () => void; isActive: boolean }
> = (props) => (
  <MapPinWrapper>
    <MapPinLeg isActive={props.isActive} type={props.type} />
    <MapPin onClick={props.handlePinClick} {...props}>
      {props.type === 'lady' ? 'M' : 'S'}
    </MapPin>
    {/*<Details>Some textsddasds</Details>*/}
  </MapPinWrapper>
)
