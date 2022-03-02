import { ButtonScrollTop } from './styles'
import { useState } from 'react'
import IconChevron from '/public/img/chevron-top-icon.svg'

export const ScrollButtonTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    if (!process.browser) {
      return
    }
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    if (!process.browser) {
      return
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    })
  }
  if (process.browser) {
    window.addEventListener('scroll', toggleVisible)
  }

  return (
    <ButtonScrollTop
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <IconChevron />
    </ButtonScrollTop>
  )
}
