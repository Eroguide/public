import { MapPin, MapPinLeg, MapPinWrapper } from './styles'
import { ListLocation_listLocation } from '@/graphql/types/ListLocations'
import { Coords } from 'google-map-react'

export const MapPinElement: React.FC<
  Coords &
    ListLocation_listLocation & {
      handlePinClick: (id: string, type: 1 | 2, itemId: string) => void
      isActive: boolean
    }
> = ({ isActive, employeeId, handlePinClick, salonId, id, ...props }) => {
  const type = salonId ? 1 : 2
  const itemId = type === 1 ? salonId : employeeId

  return (
    <MapPinWrapper>
      <MapPinLeg isActive={isActive} type={type} />
      <MapPin
        onClick={() => handlePinClick(id, type, itemId)}
        isActive={isActive}
        type={type}
        {...props}
      >
        {employeeId ? 'M' : 'S'}
      </MapPin>
    </MapPinWrapper>
  )
}
