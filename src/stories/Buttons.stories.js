import React from 'react'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import {action} from '@storybook/addon-actions';
import ContainedButtons from '../components/material/Buttons/ContainedButtons'
import ComplexButtons from '../components/material/Buttons/ComplexButtons'
import DifferentSizedButtons from '../components/material/Buttons/DifferentSizedButtons'
import FloatingActionButtons from '../components/material/Buttons/FloatingActionButtons'
import GroupedButtons from '../components/material/Buttons/GroupedButtons'
import IconButtons from '../components/material/Buttons/IconButtons'
import OutlinedButtons from '../components/material/Buttons/OutlinedButtons'
import TextButtons from '../components/material/Buttons/TextButtons'


export default {
    component : ContainedButtons,
    title : 'Buttons',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const ContainedButton = () => <ContainedButtons onClick={action('clicked')}>
 </ContainedButtons>;

 export const DifferentSizedButton = () => <DifferentSizedButtons onClick={action('clicked')}></DifferentSizedButtons>
 export const ComplexButton = () => <ComplexButtons onClick={action('clicked')}></ComplexButtons>
 export const FloatingActionButton = () => <FloatingActionButtons onClick={action('clicked')}></FloatingActionButtons>
 export const GroupedButton = () => <GroupedButtons onClick={action('clicked')}></GroupedButtons>
 export const IconButton = () => <IconButtons onClick={action('clicked')}></IconButtons>
 export const OutlinedButton = () => <OutlinedButtons onClick={action('clicked')}></OutlinedButtons>
 
 export const TextButton = () => <TextButtons onClick={action('clicked')}></TextButtons>
 