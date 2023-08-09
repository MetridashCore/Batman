import React from 'react'
import Form1 from './form1'
import Form2 from './form2'
import Form3 from './form3'
import Form4 from './form4'
import { FormOption, SelectedOption } from '@/types/types'
import DescriptionForm from '../ContentForms/DescriptionForm'
import LongForm from '../ContentForms/LongForm'
import ShortForm from '../ContentForms/ShortForm'
import TagsForm from '../ContentForms/TagsForm'

type MainSelectorProps = {
    selectedOption:SelectedOption;
  };
  
const MinSelector = ({selectedOption}:MainSelectorProps) => {
    switch (selectedOption.formType){
        case 'Description':
            return <DescriptionForm platform={selectedOption.platform} title={selectedOption.title} description={selectedOption.description} />
        case 'Long':
            return <LongForm platform={selectedOption.platform} title={selectedOption.title} description={selectedOption.description} />
        case 'Short':
            return <ShortForm platform={selectedOption.platform} title={selectedOption.title} description={selectedOption.description} />
        case 'Tags':
            return <TagsForm platform={selectedOption.platform} title={selectedOption.title} description={selectedOption.description} />
        default:
            return <></>
    }
}

export default MinSelector;