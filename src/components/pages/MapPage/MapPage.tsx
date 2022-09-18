import { Container, Wrapper } from './styles'
import GoogleMapReact, { Coords, MapOptions } from 'google-map-react'
import { useState } from 'react'
import { FloatingGallery } from '@/components/widgets/FloatingGallery'
import { MapPinElement } from './MapPinElement'
import { ListLocation } from '@/graphql/types/ListLocations'
import { useRouter } from 'next/router'

export const MapPage: React.FC<ListLocation & { pinId: string }> = ({
  listLocation,
  pinId,
}) => {
  // AIzaSyB5Yyn6-srMHw2DiyWnYOBsAixzReJD7hQ

  const center: Coords = {
    lat: 50.0865,
    lng: 14.40767,
  }
  const router = useRouter()
  const { push } = router
  const [isReady, setIsReady] = useState<boolean>(false)
  const [selectedPin, setSelectedPin] = useState<string>(pinId)

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
    setIsReady(true)
  }
  const handlePinClick = (id: string, type: 1 | 2, itemId: string): void => {
    setSelectedPin(id)
    const query = type === 1 ? { salonId: itemId } : { employeeId: itemId }
    push(
      '/map',
      {
        query,
      },
      { shallow: true }
    )
  }

  const selectedLocation = listLocation.find((x) => x.id === selectedPin)

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
        >
          {isReady &&
            listLocation.map((pin) => (
              <MapPinElement
                key={pin.id}
                handlePinClick={handlePinClick}
                isActive={pin.id === selectedPin}
                lat={pin.latitude}
                lng={pin.longitude}
                {...pin}
              />
            ))}
        </GoogleMapReact>
        {selectedLocation && (
          <FloatingGallery
            handleClose={() => setSelectedPin('')}
            data={selectedLocation}
          />
        )}
      </Wrapper>
    </Container>
  )
}
