export enum CreateOptionEnum {
  massageSalon = 'massage-salon',
  privatSalon = 'privat-salon',
  privatMasseuse = 'privat-masseuse',
  privatLady = 'privat-lady',
}

export type OptionsArray = {
  id: number
  name: string
  slug: CreateOptionEnum
}

export type InputApplication = {
  phone: string
  title: string
  // status: string
  email: string
}
