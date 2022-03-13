export enum FaqSectionsEnum {
  general = 'general',
  support = 'support',
  salon = 'salon',
  messause = 'messause',
}

export type ContentTypeProps = {
  id: string
  title: string
  content: string
}
export type FixturesFaqType = Record<string, Array<ContentTypeProps>>
