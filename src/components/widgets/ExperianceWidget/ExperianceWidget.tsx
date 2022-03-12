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
} from './styles'
import GenderIcon from '/public/img/gender-icon.svg'
import ParameterIcon from '/public/img/parameter.svg'

export const ExperianceWidget: React.FC = () => {
  return (
    <Container>
      <Inner>
        <Notification>
          <IconWrapper>
            <GenderIcon />
          </IconWrapper>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsam
            modi quasi qui quo? Assumenda consectetur culpa dolorum ducimus, in,
            ipsa laboriosam magni maiores necessitatibus quasi quibusdam vel
            veritatis vero.
          </Description>
        </Notification>

        <ParametersAnnotation>
          <ParametersItem>
            <IconWrapperParameter>
              <ParameterIcon />
            </IconWrapperParameter>
            <span>like</span>
          </ParametersItem>
          <ParametersItem>
            <IconWrapperParameter>
              <ParameterIcon />
            </IconWrapperParameter>
            <span>like</span>
          </ParametersItem>
          <ParametersItem>
            <IconWrapperParameter>
              <ParameterIcon />
            </IconWrapperParameter>
            <span>like</span>
          </ParametersItem>
          <ParametersItem>
            <IconWrapperParameter>
              <ParameterIcon />
            </IconWrapperParameter>
            <span>like</span>
          </ParametersItem>
        </ParametersAnnotation>
        <ParametersList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((x) => (
            <ParametersListItem key={x}>
              <IconWrapperParameter>
                <ParameterIcon />
              </IconWrapperParameter>
              <span>Lorem ipsum dolor.</span>
            </ParametersListItem>
          ))}
        </ParametersList>
      </Inner>
    </Container>
  )
}
