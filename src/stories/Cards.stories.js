import React from 'react'
import {action} from '@storybook/addon-actions';
import SimpleCards from '../components/material/Cards/SimpleCards'
import MediaCards from '../components/material/Cards/MediaCards'
import UIControlCards from '../components/material/Cards/UIControlCards'
import ComplexInteractionCards from '../components/material/Cards/ComplexInteractionCards'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : SimpleCards,
    title : 'Cards',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleCard = () => <SimpleCards onClick={action('clicked')}></SimpleCards>;

 export const MediaCard = () => <MediaCards onClick={action('clicked')}></MediaCards>
  
 export const UIControlCard = () => <UIControlCards onClick={action('clicked')}></UIControlCards>
 
 export const ComplexInteractionCard = () => <ComplexInteractionCards onClick={action('clicked')}></ComplexInteractionCards>