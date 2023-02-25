import styled from '@emotion/styled'

export const SinglePageContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div<{ image: string }>`
  width: 100%;
  height: 320px;
  background: gray url(${({ image }) => image ?? '/img/fake.png'}) no-repeat
    center;
  background-size: cover;
  overflow: hidden;
  border-radius: 24px;
  ${({ theme }) => theme.media.sm`
    margin-bottom: 24px;  
  `}
  ${({ theme }) => theme.media.mobile`
   margin-bottom: 24px;
  `}
`

export const SinglePageBody = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 24px;
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.md`
      width: 100%;
  `}
  ${({ theme }) => theme.media.sm`
   width: 100%;
   flex-direction: column;
    align-items: center;
  `}
  ${({ theme }) => theme.media.mobile`
   width: 100%;
   flex-direction: column;
    align-items: center;
  `}
`

export const DetailsSection = styled.div`
  width: 100%;
  max-width: 508px;

  ${({ theme }) => theme.media.sm`
      max-width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
       max-width: 100%;
  `}
`

export const LeftWidgets = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  overflow: hidden;
  margin-top: -64px;

  ${({ theme }) => theme.media.md`
     width: 455px;
  `}

  ${({ theme }) => theme.media.sm`
    margin-top: 0;
    width: 100%;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-top: 0;
    width: 100%;
  `}
`

export const Widget = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  margin-bottom: 24px;
  padding: 64px 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};

  ${({ theme }) => theme.media.md`
   padding:  64px 48px;
  `}
  ${({ theme }) => theme.media.sm`
   padding: 64px  32px;
  `}
  ${({ theme }) => theme.media.mobile`
   padding: 64px 16px;
  `}
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
  width: 200px;
  margin: 0 auto;
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 104px;
  width: 60%;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`

export const MemberSince = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[4]};
  margin-top: 32px;
`

export const ScheduleBlockWidget = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LastCheckDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.ps};
  color: ${({ theme }) => theme.grayScale[4]};
  margin-bottom: 24px;
`

export const SalonImage = styled.img`
  width: 247px;
  height: 136px;
  border-radius: 32px;
  margin: 0 auto 24px auto;
  overflow: hidden;
`

export const Row = styled.div`
  width: 100%;
  margin-bottom: 32px;
  justify-content: space-between;
  display: flex;
`

export const RowRight = styled(Row)`
  justify-content: flex-end;
`
export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
`

export const BodyContent = styled.div`
  width: calc(100% - 375px);
  padding: 40px;

  ${({ theme }) => theme.media.md`
   padding: 32px;
  `};
  ${({ theme }) => theme.media.sm`
      width: 100%;
      padding: 16px;
  `};
  ${({ theme }) => theme.media.mobile`
       width: 100%;
       padding: 16px;
  `};
`
