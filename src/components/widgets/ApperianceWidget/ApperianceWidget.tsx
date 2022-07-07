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
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployeeNew'

export const ApperianceWidget: React.FC<{
  employee: ListEmployee_listEmployee_edges_node
}> = ({ employee }) => {
  const parametersList = [
    {
      id: '1',
      label: 'Age',
      value: employee.age,
      icon: <SandWatchIcon />,
    },
    {
      id: '2',
      label: 'Height',
      value: employee.height,
      icon: <HeightIcon />,
    },
    {
      id: '3',
      label: 'Breast',
      value: employee.breastSize,
      icon: <FootIcon />,
    },
    {
      id: '4',
      label: 'Foot',
      value: employee.footSize,
      icon: <BreastIcon />,
    },
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
