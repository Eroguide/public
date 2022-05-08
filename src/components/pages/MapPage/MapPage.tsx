import {
  Container,
  Wrapper,
  MapPin,
  // Details,
  MapPinLeg,
  MapPinWrapper,
} from './styles'
import GoogleMapReact, { Coords, MapOptions } from 'google-map-react'
import { useState } from 'react'
import { FloatingGallery } from '@/components/widgets/FloatingGallery'

const AnyReactComponent: React.FC<Coords & { type: string }> = (props) => (
  <MapPinWrapper>
    <MapPinLeg />
    <MapPin {...props}>{props.type === 'lady' ? 'M' : 'S'}</MapPin>
    {/*<Details>Some textsddasds</Details>*/}
  </MapPinWrapper>
)

const pinList: Array<Coords & { type: string }> = [
  {
    lat: 50.0865,
    lng: 14.40767,
    type: 'salon',
  },
  {
    lat: 50.086,
    lng: 14.4076,
    type: 'salon',
  },
  {
    lat: 50.0864,
    lng: 14.43,
    type: 'lady',
  },
  {
    lat: 50.0864,
    lng: 14.42,
    type: 'salon',
  },
  {
    lat: 50.0890062,
    lng: 14.4163511,
    type: 'lady',
  },
]

export const MapPage: React.FC = () => {
  // AIzaSyB5Yyn6-srMHw2DiyWnYOBsAixzReJD7hQ
  const center: Coords = {
    lat: 50.0865,
    lng: 14.40767,
  }
  const [isReady, setIsReady] = useState<boolean>(false)
  const options: MapOptions = {
    zoomControl: false,
    styles: [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [{ saturation: '-100' }],
      },
      {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
    ],
  }
  const handleApiLoaded = (): void => {
    // console.log('map', map, maps)
    setIsReady(true)
  }

  return (
    <Container>
      <Wrapper isReady={isReady}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB5Yyn6-srMHw2DiyWnYOBsAixzReJD7hQ' }}
          center={center}
          options={options}
          heatmapLibrary={true}
          zoom={14}
          onGoogleApiLoaded={() => handleApiLoaded()}
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {isReady &&
            pinList.map((pin, i) => (
              <AnyReactComponent key={pin.lat * pin.lng * i} {...pin} />
            ))}
        </GoogleMapReact>
        <FloatingGallery />
      </Wrapper>
    </Container>
  )
}
