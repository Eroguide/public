import { FormSection, FormTitleSection } from './styles'
import {
  LargeTitle,
  SmallTitle,
  TitleSection,
  MediumTitle,
} from '@/components/pages/FaqPage/styles'
import { FormInputList } from '@/components/pages/CreatePrivatSalonPage/styles'
import { CustomInput } from '@/components/generic/CustomInput'
import { CustomButton } from '@/components/generic'

export const SupportPage: React.FC = () => {
  return (
    <>
      <TitleSection>
        <SmallTitle>Klidně můžete dozvědět</SmallTitle>
        <LargeTitle>Eroguide podpora</LargeTitle>
      </TitleSection>

      <FormSection>
        <FormTitleSection>
          <MediumTitle>Add the profile of a private masseuse</MediumTitle>
          <p>
            Leave a request and I will send you personal access profile where
            you upload your photos and description.
          </p>
        </FormTitleSection>
        <FormInputList>
          <CustomInput type="text" placeholder="Your name" />
          <CustomInput type="email" placeholder="Email" />
          <CustomInput type="tel" placeholder="Phone" />
        </FormInputList>

        <CustomButton type={'submit'}>Send request</CustomButton>
      </FormSection>
    </>
  )
}
