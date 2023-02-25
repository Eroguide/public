import {
  Container,
  AvatarImage,
  Name,
  NameWrapper,
  ReviewsCounter,
  Parameter,
  ParameterCounter,
  ParametersList,
  ParameterTitle,
  ButtonsRow,
  Divider,
  IconWrapper,
  MemberSince,
} from './styles'
import BlueCheckIcon from '/public/img/check-blue-lg.svg'
import StartIcon from '/public/img/start-lined.svg'
import Heart from '/public/img/heart.svg'
import Cloud from '/public/img/cloud-icon.svg'
import Whazaap from '/public/img/whazaap-icon.svg'
import { CustomButton, InfoCard } from '@/components/generic'
import { useState } from 'react'
import { ListEmployee_listEmployee_edges_node } from '@/graphql/types/ListEmployee'
import { format } from 'date-fns'
import { theme } from '@/src/theme'

export const PersonalInfoSinglePageWidget: React.FC<{
  employee: ListEmployee_listEmployee_edges_node
}> = ({ employee }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isOn = !employee.isTurnOff
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <AvatarImage img={isOn ? employee.headPhoto : '/img/fake.png'} />
      <NameWrapper>
        <Name>{employee.name}</Name>
        {isOn && employee.status ? <BlueCheckIcon /> : null}
      </NameWrapper>
      {!isOn ? (
        <InfoCard strokeColor="yellow">
          <p style={{ color: theme.support[1] }}>
            Attention, information about the employee may be not up to date
          </p>
        </InfoCard>
      ) : null}
      {isOn ? (
        <ReviewsCounter>
          <span>
            <StartIcon />
          </span>
          <span> 256 reviews</span>
        </ReviewsCounter>
      ) : null}

      {isOn ? (
        <>
          <ParametersList>
            <Parameter>
              <ParameterTitle>interview</ParameterTitle>
              <ParameterCounter>1</ParameterCounter>
            </Parameter>
            <Parameter>
              <ParameterTitle>photo</ParameterTitle>
              <ParameterCounter>{employee.gallery.length}</ParameterCounter>
            </Parameter>
            <Parameter>
              <ParameterTitle>video</ParameterTitle>
              <ParameterCounter>4</ParameterCounter>
            </Parameter>
            <Parameter>
              <ParameterTitle>audio</ParameterTitle>
              <ParameterCounter>8</ParameterCounter>
            </Parameter>
          </ParametersList>
          <Divider />
          <ButtonsRow>
            <IconWrapper>
              <Heart />
            </IconWrapper>
            <IconWrapper>
              <Cloud />
            </IconWrapper>
            <IconWrapper>
              <Whazaap />
            </IconWrapper>
            {employee.phone && (
              <CustomButton
                styleType="secondary"
                sizeType="medium"
                onClick={handleOnClick}
              >
                {isOpen ? employee.phone : 'Contact'}
              </CustomButton>
            )}
          </ButtonsRow>
          <Divider />
        </>
      ) : null}

      <MemberSince>
        Member {employee.id} since
        {format(new Date(employee.createdAt), ' MMM dd. yyyy')}
      </MemberSince>
    </Container>
  )
}
