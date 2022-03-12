import {
  Container,
  Inner,
  ParameterItem,
  ParameterLabel,
  ParameterValue,
} from './styles'
import SandWatchIcon from '/public/img/sand-watch-icon.svg'
import HeightIcon from '/public/img/height-appearance-icon.svg'
import FootIcon from '/public/img/foot-appearance-icon.svg'
import BreastIcon from '/public/img/breast-appearance-icon.svg'

export const ApperianceWidget: React.FC = () => {
  const parametersList = [
    { id: '123123', label: 'Age', value: 28, icon: <SandWatchIcon /> },
    { id: '1223', label: 'Height', value: 175, icon: <HeightIcon /> },
    { id: '13123', label: 'Breast', value: 2, icon: <FootIcon /> },
    { id: '1423', label: 'Foot', value: 28, icon: <BreastIcon /> },
  ]

  return (
    <Container>
      <Inner>
        {parametersList.map((parameter) => (
          <ParameterItem key={parameter.id}>
            {parameter.icon}
            <ParameterLabel>{parameter.label}:</ParameterLabel>
            <ParameterValue>{parameter.value}</ParameterValue>
          </ParameterItem>
        ))}
      </Inner>
    </Container>
  )
}
