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

export const ExperianceWidget: React.FC = () => {
  const detailsList = [
    { id: '123123', label: 'like', icon: <HeartIcon />, status: 1 },
    { id: '1223', label: 'do', icon: <DoIcon />, status: 2 },
    { id: '13123', label: 'if like', icon: <IfIcon />, status: 3 },
    { id: '1423', label: 'do not', icon: <DontIcon />, status: 4 },
  ]

  const contentList = [
    {
      id: '12312223',
      label: 'classic massage',
      details: 'graduated courses',
      status: 1,
    },
    { id: '1231ss23', label: 'erotic massage', status: 1 },
    {
      id: '123ff123',
      label: 'role playing',
      details: 'favorite costume: madam',
      status: 2,
    },
    { id: '1231aa23', label: 'Massage for ladies', status: 4 },
    {
      id: '12312223dd',
      label: 'urological massage',
      details: 'gentle',
      status: 1,
    },
    { id: '1231ss23vvs', label: 'lesbian show', status: 3 },
    { id: '123ff123a', label: 'sakura branch', status: 1 },
    { id: '1231aa23vv', label: 'erotic massage', status: 1 },
    {
      id: '1231aa23vvc',
      label: 'lap dance',
      details: 'not against',
      status: 3,
    },
    { id: '1231aa23vsavv', label: 'aquagel massage', status: 1 },
    { id: '1231aa21323vv', label: 'peep show', status: 1 },
  ]

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
            <ParametersItem key={listItem.id}>
              <IconWrapperParameter>{listItem.icon}</IconWrapperParameter>
              <span>{listItem.label}</span>
            </ParametersItem>
          ))}
        </ParametersAnnotation>
        <ParametersList>
          {contentList.map((x) => (
            <ParametersListItem key={x.id}>
              <IconWrapperParameter>
                {detailsList.find((icon) => icon.status === x.status)?.icon}
              </IconWrapperParameter>
              <Title isCrossed={x.status === 4}>{x.label}</Title>
              <Details>{x?.details}</Details>
            </ParametersListItem>
          ))}
        </ParametersList>
      </Inner>
    </Container>
  )
}
