import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-top: 104px;
`

export const TagLine = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 48px;
  margin-bottom: 42px;
`

export const LeftTag = styled.span`
  min-width: 42px;
  flex-direction: row;
  align-items: center;
  display: flex;
  height: 16px;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[0]};
  background-color: ${({ theme }) => theme.primary[2]};
  padding: 0 10px;
  border-radius: 8px;
`

export const RightDate = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize['xs']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[2]};
`

export const Wrapper = styled.div`
  flex-flow: column wrap;
  max-width: 410px;
  width: 100%;
`

export const PostsCounter = styled.span`
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 42px;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.grayScale[1]};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['xxl']};
  font-weight: 600;
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 42px;
`

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['m']};
  font-weight: 400;
  color: ${({ theme }) => theme.grayScale[2]};
  margin-bottom: 64px;
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize['s']};
  font-weight: 400;
  color: ${({ theme }) => theme.grayScale[4]};
  margin-bottom: 56px;
`
