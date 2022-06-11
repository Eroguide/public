import { Overlay, LoaderIcon, GridLogo, Cell } from './styles'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export const Loader: React.FC = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      document.body.style.height = '100vh'
      // document.body.style.overflow = 'hidden'
    }
    if (!isLoading) {
      document.body.style.height = ''
      // document.body.style.overflow = ''
    }
  }, [isLoading])

  useEffect(() => {
    const handleStart = (url: string, { shallow }: Record<string, boolean>) =>
      !shallow && url !== router.asPath && setIsLoading(true)

    const handleComplete = (
      url: string,
      { shallow }: Record<string, boolean>
    ) =>
      (url === router.asPath || shallow || router.isReady) &&
      setIsLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  if (!isLoading) {
    return null
  }

  return (
    <Overlay>
      <LoaderIcon>
        <GridLogo>
          {[1, 2, 3, 6, 9, 8, 7, 4, 5].map((x, i) => (
            <Cell key={x} idx={x} index={i} />
          ))}
        </GridLogo>
        {/*<SpinnerIcon />*/}
      </LoaderIcon>
    </Overlay>
  )
}
