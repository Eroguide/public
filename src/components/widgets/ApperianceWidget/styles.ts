import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: auto;
`

export const Inner = styled.div<{ size?: string }>`
  width: calc(
    (${({ size }) => (size === 'small' ? '80px' : '115px')} + 16px) * 4
  );
  display: flex;
  flex-wrap: wrap;
  ${({ theme, size }) => theme.media.md`
 width: calc((${size === 'small' ? '80px' : '115px'}  + 16px) * 2);
  `}

  ${({ theme, size }) => theme.media.sm`
 width: calc((${size === 'small' ? '80px' : '115px'} + 16px) * 4);
  `}
  
  ${({ theme, size }) => theme.media.mobile`
 width: calc((${size === 'small' ? '80px' : '115px'} + 16px) * 2);
  `}
`

export const ParameterLabel = styled.span<{ size?: string }>`
  font-weight: 400;
  ${({ theme, size }) => (size ? theme.typography.ps : theme.typography.h4)};
  color: ${({ theme }) => theme.grayScale[5]};
`

export const ParameterValue = styled.span<{ size?: string }>`
  font-weight: 600;
  ${({ theme, size }) => (size ? theme.typography.h5 : theme.typography.h3)};
  color: ${({ theme }) => theme.grayScale[5]};
  text-align: left;
`

export const ParameterItem = styled.div<{ size?: string }>`
  width: ${({ size }) => (size === 'small' ? '80px' : '115px')};
  height: ${({ size }) => (size === 'small' ? '104px' : '115px')};
  border-radius: 24px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-right: ${({ size }) => (size === 'small' ? '8px' : '16px')};
  max-width: ${({ size }) => (size === 'small' ? '104px' : '115px')};

  ${({ theme, size }) =>
    !size &&
    theme.media.md`
    width: calc(100% / 2);
  `}
  ${({ theme, size }) =>
    !size &&
    theme.media.sm`
   width: calc(100% / 4);
  `}
  ${({ theme, size }) =>
    !size &&
    theme.media.mobile`
    width: calc(100% / 2);
  `}
`
