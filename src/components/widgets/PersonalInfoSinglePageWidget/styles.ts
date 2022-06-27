import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AvatarImage = styled.div<{ img: string }>`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin-bottom: 24px;
  overflow: hidden;
  background: white url(${({ img }) => img ?? '/img/single-avatar.jpg'})
    no-repeat center center;
  background-size: cover;
`

export const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.h2};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ReviewsCounter = styled.div`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 400;
  background-color: ${({ theme }) => theme.grayScale[6]};
  height: 40px;
  border-radius: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  ${({ theme }) => theme.typography.h5};
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 24px;
  & span {
    height: 24px;
    padding: 0 2px;
    display: flex;
    align-items: center;
  }
`

export const Parameter = styled.li`
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typography.h5};
  text-decoration: none;
  margin-bottom: 8px;
`

export const ParameterTitle = styled.h5`
  ${({ theme }) => theme.typography.h5};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[2]};
`

export const ParameterCounter = styled.span`
  ${({ theme }) => theme.typography.pm};
  font-weight: 400;
  color: ${({ theme }) => theme.grayScale[3]};
`

export const ParametersList = styled.ul`
  color: ${({ theme }) => theme.grayScale[5]};
  font-weight: 400;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typography.pm};
  margin-bottom: 24px;
  min-width: 200px;
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
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`
