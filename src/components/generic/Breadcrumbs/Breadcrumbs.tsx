import {
  Container,
  Wrapper,
  CrumbWrapper,
  CrumbLink,
  CrumbTitle,
  IconWrapper,
} from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ChevronRight from '/public/img/chevron-right.svg'

const Crumb: React.FC<{ title: string; href: string; last?: boolean }> = ({
  title,
  href,
  last = false,
}) => {
  return (
    <>
      <CrumbWrapper>
        {!last ? (
          <>
            <Link href={href} passHref>
              <CrumbLink>{title}</CrumbLink>
            </Link>
          </>
        ) : (
          <CrumbTitle>{title}</CrumbTitle>
        )}
      </CrumbWrapper>
      {!last && (
        <IconWrapper>
          <ChevronRight />
        </IconWrapper>
      )}
    </>
  )
}

export const Breadcrumbs: React.FC = () => {
  const router = useRouter()

  function generateBreadcrumbs(): Array<Record<string, string>> {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split('?')[0]

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0)

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
      // The title will just be the route string for now
      const title = subpath
      return { href, title }
    })

    // Add in a default "Home" crumb for the top-level
    return [{ href: '/', title: 'Home' }, ...crumblist]
  }

  // Call the function to generate the breadcrumbs list
  const breadcrumbs = generateBreadcrumbs()

  return (
    <Container>
      <Wrapper>
        {breadcrumbs.map((crumb, idx) => (
          <Crumb
            key={idx}
            title={crumb.title}
            href={crumb.href}
            last={idx === breadcrumbs.length - 1}
          />
        ))}
      </Wrapper>
    </Container>
  )
}
