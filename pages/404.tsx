import { BaseLayout } from '@/components/layouts/BaseLayout'
import { ErrorPage } from '@/components/pages'
import { SectionBlock } from '@/components/layouts/SectionBlock'

export default function Custom404() {
  return (
    <BaseLayout noFooter>
      <SectionBlock>
        <ErrorPage />
      </SectionBlock>
    </BaseLayout>
  )
}
