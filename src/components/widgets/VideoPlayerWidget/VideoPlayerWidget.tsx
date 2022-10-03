import { Container, Inner, VideoWrapper } from './styles'
import ReactPlayer from 'react-player/youtube'
import { ButtonDarkPlay } from '@/components/generic/ButtonStyled/styles'
import PlayIcon from '/public/img/play-icon.svg'
export const VideoPlayerWidget: React.FC<{ url?: string }> = ({ url }) => {
  return (
    <Container>
      <Inner>
        <VideoWrapper>
          <ReactPlayer
            light
            playing
            playIcon={
              <ButtonDarkPlay>
                <PlayIcon />
                <span> Play Video</span>
              </ButtonDarkPlay>
            }
            width="100%"
            url={url}
          />
        </VideoWrapper>
      </Inner>
    </Container>
  )
}
