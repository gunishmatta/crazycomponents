import React from 'react'
import {action} from '@storybook/addon-actions';
import Chips from '../components/material/Chips/Chips'
import DefaultVariants from '../components/material/Chips/DefaultVariants'
import ChipArrays from '../components/material/Chips/ChipArrays'
import OutlinedChips from '../components/material/Chips/OutlinedChips'
import OutlinedVariants from '../components/material/Chips/OutlinedVariants'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : Chips,
    title : 'Chips',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const Chip = () => <Chips onClick={action('clicked')}></Chips>;

 export const DefaultVariant = () => <DefaultVariants onClick={action('clicked')}></DefaultVariants>
 export const ChipArray = () => <ChipArrays onClick={action('clicked')}></ChipArrays>
 export const OutlinedChip = () => <OutlinedChips onClick={action('clicked')}></OutlinedChips>
 export const OutlinedVariant = () => <OutlinedVariants onClick={action('clicked')}></OutlinedVariants>


 