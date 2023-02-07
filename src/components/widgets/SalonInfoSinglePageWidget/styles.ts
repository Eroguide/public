import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 104px;
  margin: 0 auto;
`

export const MemberSince = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[4]};
  margin-top: 32px;
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
  width: 200px;
  margin: 0 auto;
  padding: 0 64px;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const Row = styled.div`
  margin: 32px 0;
  min-height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;

  &:first-of-type {
    margin-top: 0;
  }
`

export const RatingSalon = styled.span`
  ${({ theme }) => theme.typography.h3};
  font-weight: 600;
  color: ${({ theme }) => theme.support[2]};
  display: flex;
  align-items: center;
  height: 32px;

  svg {
    transform: rotate(180deg);
    margin-left: 8px;
  }

  span {
    svg {
      transform: rotate(0deg);
    }
  }
`

export const LocationText = styled.span`
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.grayScale[3]};
  margin-left: 8px;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const Right = styled.div`
  display: flex;
`

export const IconWrapperLocation = styled.div`
  display: flex;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }
`
