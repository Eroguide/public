import {
  Container,
  Inner,
  AudioWrapper,
  PlayIconWrapper,
  TimeLine,
  Title,
  Details,
  UploadDate,
  UploadTag,
  Genre,
  Left,
  Right,
  PlayIconOverlay,
  IconWrapper,
  Timer,
} from './styles'
import { SyntheticEvent, useRef, useState } from 'react'
import PlayIcon from '/public/img/play-icon.svg'
import StopIcon from '/public/img/stop-icon.svg'
export const AudioPlayerWidget: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const secondsToHms = (seconds: number): string => {
    if (!seconds) return '00m 00s'

    let duration = seconds
    const hours = duration / 3600
    duration = duration % 3600

    const min = parseInt(String(duration / 60))
    duration = duration % 60

    const sec = parseInt(String(duration))

    let secondsToShow = String(sec)
    let minutesToShow = String(min)

    if (sec < 10) {
      secondsToShow = `0${sec}`
    }
    if (min < 10) {
      minutesToShow = `0${min}`
    }

    if (parseInt(String(hours), 10) > 0) {
      return `${parseInt(
        String(hours),
        10
      )}h ${minutesToShow}m ${secondsToShow}s`
    } else if (min == 0) {
      return `00m ${secondsToShow}s`
    } else {
      return `${minutesToShow}m ${secondsToShow}s`
    }
  }

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const onChange = (e: SyntheticEvent<HTMLAudioElement, Event>): void => {
    const audio = audioRef.current
    if (!audio) {
      return
    }
    audio.currentTime = (audio.duration / 100) * e.currentTarget.currentTime
    setPercentage(e.currentTarget.currentTime)
  }

  const play = (): void => {
    const audio = audioRef.current
    if (!audio) {
      return
    }
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e: {
    currentTarget: { currentTime: number; duration: number }
  }) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2)
    const time = e.currentTarget.currentTime
    setPercentage(+percent)
    setCurrentTime(Number(time.toFixed(2)))
  }

  return (
    <Container>
      <Inner>
        <AudioWrapper>
          <audio
            src="/sample.mp3"
            ref={audioRef}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(Number(e.currentTarget.duration.toFixed(2)))
            }}
            onEnded={(e) => {
              setIsPlaying(false)
              e.currentTarget.pause()
            }}
          />
          <PlayIconWrapper onClick={play}>
            <PlayIconOverlay />
            <IconWrapper>{isPlaying ? <StopIcon /> : <PlayIcon />}</IconWrapper>
          </PlayIconWrapper>

          <Details>
            <Left>
              <Title>Nelly</Title>
              <Genre>interview</Genre>
              {!isPlaying ? (
                <Timer>{secondsToHms(duration)}</Timer>
              ) : (
                <Timer isActive>{secondsToHms(Number(currentTime))}</Timer>
              )}
            </Left>
            <Right>
              <UploadTag>updload:</UploadTag>
              <UploadDate>Nov 18. 2021</UploadDate>
            </Right>
          </Details>
          <TimeLine
            percentage={percentage === 100 ? 0 : percentage}
            onChange={onChange}
          />
        </AudioWrapper>
      </Inner>
    </Container>
  )
}
