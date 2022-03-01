import { Container, Wrapper, MapOverLay, ButtonMap } from './styles'
import GoogleMapReact, { Coords, MapOptions } from 'google-map-react'

const AnyReactComponent: React.FC<Coords & { text: string }> = ({ text }) => (
  <ButtonMap>{text}</ButtonMap>
)

export const MapPage: React.FC = () => {
  // AIzaSyCgVmkz6wPvOXKkUQB9TprjnuN_9nbEFQw
  const center: Coords = {
    lat: 59.95,
    lng: 30.33,
  }

  const options: MapOptions = {
    zoomControl: false,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [{ saturation: '-1300' }],
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [{ visibility: 'off' }],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#2b6abf' }],
      },
      {
        stylers: [{ color: '#31a557' }],
      },
    ],
  }

  return (
    <Container>
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCgVmkz6wPvOXKkUQB9TprjnuN_9nbEFQw' }}
          center={center}
          options={options}
          heatmapLibrary={true}
          zoom={11}
        >
          <AnyReactComponent {...center} text="My Marker" />
        </GoogleMapReact>
      </Wrapper>
    </Container>
  )
}
