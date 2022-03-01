import { BaseLayout } from '@/components/layouts/BaseLayout'
import { ErrorPage } from '@/components/generic'

export default function Custom404() {
  return (
    <BaseLayout noFooter>
      <ErrorPage />
    </BaseLayout>
  )
}