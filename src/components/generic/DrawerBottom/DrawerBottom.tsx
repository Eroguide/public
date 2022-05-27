import {
  DrawerBottomContainer,
  BgOverlay,
  InnerContent,
  TextContent,
} from './styles'
import { CloseButton } from '@/components/generic'
import { DrawerBottomProps } from './types'
import { GalleryLanding } from '@/components/generic'
import { useCallback, useEffect } from 'react'
export const DrawerBottom: React.FC<DrawerBottomProps> = ({
  isOpen,
  handleClose,
}) => {
  if (process.browser) {
    if (isOpen) {
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.height = '100%'
      document.body.style.overflowY = 'auto'
    }
  }

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction)

    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [escFunction])

  return (
    <>
      {isOpen && <BgOverlay onClick={() => handleClose()} />}
      <DrawerBottomContainer isOpen={isOpen}>
        <CloseButton handleClose={() => handleClose()} />
        <InnerContent>
          <GalleryLanding
            title="Legal information and legal notices"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            ipsum obcaecati praesentium repellat similique? A ab, adipisci amet
            architecto aspernatur autem culpa cum cupiditate deserunt
            dignissimos dolore dolorum, ducimus enim eos et, eveniet excepturi"
          />
          {/*<HeroTitle>Legal information and legal notices</HeroTitle>*/}

          {/*<SubTitle>*/}
          {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias*/}
          {/*  aspernatur debitis deserunt distinctio ea iste laboriosam nihil*/}
          {/*  nulla pariatur tenetur!*/}
          {/*</SubTitle>*/}
          <TextContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            ipsum obcaecati praesentium repellat similique? A ab, adipisci amet
            architecto aspernatur autem culpa cum cupiditate deserunt
            dignissimos dolore dolorum, ducimus enim eos et, eveniet excepturi
            exercitationem expedita facilis iste libero magni minima minus nemo
            nihil odio officiis perferendis praesentium quas qui quisquam
            reiciendis rerum sit. Consequuntur cumque debitis delectus
            doloremque dolorum et harum magni odio odit? A asperiores numquam
            provident tenetur totam! Accusamus alias amet atque autem
            dignissimos id ipsam, laborum nam necessitatibus, nihil nisi
            possimus quaerat quam reiciendis repellendus reprehenderit sapiente
            sit soluta suscipit temporibus vero voluptatem voluptatibus. A
            accusantium blanditiis corporis, ducimus explicabo id pariatur
            praesentium quae quis repellendus repudiandae saepe soluta
            temporibus velit veniam? Consequuntur esse est ipsam maiores
            molestiae odio pariatur recusandae voluptatibus. Dolores est ex
            exercitationem iste itaque labore magnam quasi similique ut. Ab
            beatae blanditiis doloremque eligendi ex fugit, illo incidunt,
            inventore ipsa laboriosam laborum libero magnam minima perspiciatis
            possimus quas qui quidem ratione rem repudiandae sequi sunt tempora
            vitae. Ab accusantium architecto cumque ex inventore labore nobis
            odit optio quisquam reiciendis reprehenderit, sint sunt velit. A
            aliquam, aperiam aspernatur at, commodi dicta dignissimos error
            laborum nemo nostrum provident quidem quos recusandae, sed tempora
            tenetur ullam. Blanditiis, consequuntur culpa impedit maxime modi
            nisi officia perspiciatis repellendus rerum velit. Accusamus, at
            enim? Dignissimos excepturi explicabo, iusto molestiae perferendis
            rem unde? Architecto corporis cupiditate iste quasi qui repellat
            similique voluptate! Aliquam assumenda, blanditiis, dolores dolorum
            eius eveniet expedita fugiat iste nostrum numquam officia omnis
            provident quaerat qui, repellat repudiandae rerum sit sunt velit
            voluptas. Aliquam, amet animi debitis deserunt dicta dolorum enim ex
            fugiat laborum, libero magnam minus omnis optio perferendis porro
            quaerat quidem quos repellendus repudiandae sequi sint sit soluta.
            Ducimus quia quibusdam sed veritatis vero. Id odit recusandae rerum!
            Atque consequuntur deserunt, dicta dolorum eligendi enim laudantium
            maiores nemo neque, nihil numquam qui sint soluta sunt tenetur
            voluptatem voluptatibus. Alias nostrum numquam quod voluptas
            voluptates. Animi consectetur dicta dolor dolore dolores doloribus
            dolorum eius enim facilis illum incidunt inventore laborum odio
            pariatur provident, quas recusandae reprehenderit tenetur ullam
            voluptatem? Aliquid aut eius eos fuga harum iste iusto labore quam
            quasi rem! Adipisci amet consequuntur delectus dicta dolorem ea enim
            eos exercitationem, explicabo facere fuga harum incidunt minima modi
            mollitia non obcaecati perferendis provident quas sit tempore ut
            veritatis. Ad cum dolorum impedit magnam, nisi numquam odio placeat
            provident rerum veritatis. At consequuntur culpa dolorem eligendi
            enim, expedita maxime reprehenderit saepe unde voluptas. Aut beatae
            commodi dolorem fugiat laboriosam natus non placeat temporibus?
            Amet, animi doloremque et fuga fugit incidunt natus nulla voluptate.
            At debitis ea eius fugiat harum itaque laborum nesciunt nihil,
            officia quae reiciendis repellat repudiandae voluptatibus?
            Dignissimos ducimus eius enim hic molestias necessitatibus optio
            quibusdam sequi veritatis, voluptatum? Dicta doloribus et libero
            maxime molestias provident vel! Animi dolore excepturi illo iusto
            libero molestias. Amet aperiam at consectetur corporis dicta dolor
            id, ipsa iure laboriosam magnam minima molestias nisi pariatur
            placeat quam quia quis soluta, ullam velit voluptas. Aperiam
            consequatur consequuntur dignissimos eveniet exercitationem facere
            fugit impedit nostrum officiis perferendis provident, quisquam quod
            voluptatem! Architecto aut consequuntur cumque eius ex fugit hic
            incidunt inventore laudantium nam, natus nesciunt officia omnis
            pariatur quia quisquam repudiandae saepe sed sequi similique ullam
            veniam vitae? Adipisci, aliquid ducimus ipsam iusto quas recusandae
            rerum sit vero! Accusantium alias exercitationem non quia rem sit
            soluta! Adipisci asperiores aspernatur deleniti dicta, dolore
            dolores ea earum est eum hic illo inventore itaque laborum libero
            magnam maiores molestias nesciunt nostrum officiis omnis porro quae
            quibusdam quis quisquam quo quod recusandae tempore totam veritatis
            voluptate! Aliquam doloribus ducimus est fuga illum magni natus quis
            quod repellat sit? Amet atque facere facilis, quae rem repellendus
            veritatis vitae. Ad delectus dolor eum excepturi molestias mollitia
            pariatur quia repellat repellendus? Ex iusto modi odio tenetur
            ullam. A error est explicabo inventore officiis optio sed velit,
            voluptas voluptatibus? Amet error modi natus nulla quas quasi
            repellendus totam. Aliquam, dolorem doloremque. Consequuntur est hic
            quam quis reiciendis similique ut? Aliquid, amet cupiditate ducimus
            eaque earum ipsam maxime mollitia natus reiciendis vero? Aperiam
            deserunt eaque enim est eum exercitationem, ipsum laboriosam
            laudantium molestiae natus nihil nulla numquam possimus provident
            quas quidem reprehenderit sequi unde vel vitae. At dolores odio
            saepe sed tempora? A animi assumenda commodi ducimus est itaque,
            minima necessitatibus omnis quam qui quidem rerum veritatis?
            Accusamus, aliquam asperiores aut autem beatae commodi culpa
            dignissimos distinctio doloribus ea enim explicabo, facilis harum
            illum impedit inventore iste libero magnam magni minus nesciunt
            numquam optio porro provident quaerat qui quo repellat sed soluta
            tenetur unde veniam vitae voluptatum! Laborum maxime natus nobis.
            Accusamus eligendi est fugiat harum nesciunt, nulla quia
            repellendus! At atque autem commodi consequatur cumque cupiditate
            debitis delectus doloribus error ex expedita fugiat harum, illum
            ipsum nam neque nihil, non nostrum, nulla quidem repellendus rerum
            sapiente soluta unde ut vel veritatis. Aliquam animi assumenda
            consequatur delectus dolore doloribus dolorum ea error et ex facere
            iste, iure, libero quasi quia quibusdam recusandae reiciendis sint,
            voluptas voluptates. Dolores exercitationem nulla rem sint suscipit.
            Aliquid cum, error eveniet, iusto neque odit quam quasi soluta,
            suscipit vel veniam voluptatem. Aperiam asperiores consequuntur
            delectus, ea explicabo fugiat nobis odio vero! Amet assumenda
            impedit modi? Accusamus autem blanditiis consequatur delectus eius
            eligendi, facere illum impedit ipsa libero magni minima quasi
            repellendus sed similique sint, voluptatum. Accusamus architecto
            facere libero molestiae nemo officia omnis quasi temporibus veniam
            voluptatum? Ab, consequuntur delectus explicabo nam nulla ratione
            repellendus sapiente vero. A ab accusamus asperiores atque cumque
            debitis deleniti doloribus earum eius est eum ex illo inventore
            ipsam, ipsum, iste labore laboriosam laborum minus numquam obcaecati
            odit optio pariatur perferendis placeat quasi quis reiciendis rem
            reprehenderit repudiandae rerum sint temporibus vero. Accusamus
            alias animi debitis dolore incidunt, magnam nihil omnis praesentium
            similique sit tempore, vel voluptatibus! Consequuntur dignissimos ea
            facilis magni ratione. Alias facere magni molestias, nulla
            recusandae similique. Neque qui tenetur voluptatem. Accusamus ad at,
            autem consequuntur delectus deleniti expedita, facere iste iusto
            magnam minima molestias numquam odio officiis perspiciatis
            reiciendis reprehenderit tempore unde. A impedit omnis sit.
          </TextContent>
        </InnerContent>
      </DrawerBottomContainer>
    </>
  )
}
