import {
  Container,
  Inner,
  Notification,
  IconWrapper,
  Description,
  ParametersAnnotation,
  ParametersItem,
  IconWrapperParameter,
  ParametersListItem,
  ParametersList,
  Title,
  Details,
} from './styles'
import GenderIcon from '/public/img/gender-icon.svg'
import HeartIcon from '/public/img/heart-exp-icon.svg'
import DoIcon from '/public/img/check-exp-icon.svg'
import IfIcon from '/public/img/if-like-exp-icon.svg'
import DontIcon from '/public/img/dont-exp-icon.svg'
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'
import { useMemo } from 'react'

export const ExperianceWidget: React.FC<{
  serviceLike: ListEmployee_listEmployee_edges_node['serviceLike']
}> = ({ serviceLike }) => {
  const detailsList = useMemo(
    () => [
      { label: 'like', icon: <HeartIcon />, status: 'ilike' },
      { label: 'do', icon: <DoIcon />, status: 'do' },
      { label: 'if like', icon: <IfIcon />, status: 'iflike' },
      { label: 'do not', icon: <DontIcon />, status: 'donot' },
    ],
    []
  )

  return (
    <Container>
      <Inner>
        <Notification>
          <IconWrapper>
            <GenderIcon />
          </IconWrapper>
          <Description>
            Any programs and additions exclude sex. In the presence of the
            services of the show Mistress, Role-playing games , Foot fetish,
            Lesbian show, they are held in the form of a staged show.
          </Description>
        </Notification>

        <ParametersAnnotation>
          {detailsList.map((listItem) => (
            <ParametersItem key={listItem.status}>
              <IconWrapperParameter>{listItem.icon}</IconWrapperParameter>
              <span>{listItem.label}</span>
            </ParametersItem>
          ))}
        </ParametersAnnotation>
        <ParametersList>
          {serviceLike.map((x) => (
            <ParametersListItem key={x.serviceId + x.preferences}>
              <IconWrapperParameter>
                {
                  detailsList.find((icon) => icon.status === x.preferences)
                    ?.icon
                }
              </IconWrapperParameter>
              <Title isCrossed={x.preferences === 'donot'}>
                {x?.service?.name}
              </Title>
              <Details>{x?.service?.description}</Details>
            </ParametersListItem>
          ))}
        </ParametersList>
      </Inner>
    </Container>
  )
}
