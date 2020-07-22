import React from 'react'
import {action} from '@storybook/addon-actions';
import SimpleCards from '../components/material/Cards/SimpleCards'
import MediaCards from '../components/material/Cards/MediaCards'
import UIControlCards from '../components/material/Cards/UIControlCards'
import ComplexInteractionCards from '../components/material/Cards/ComplexInteractionCards'


export default {
    component : SimpleCards,
    title : 'Cards',
    excludeStories: /.*Data$/,
};


 export const SimpleCard = () => <SimpleCards onClick={action('clicked')}></SimpleCards>;

 export const MediaCard = () => <MediaCards onClick={action('clicked')}></MediaCards>
  
 export const UIControlCard = () => <UIControlCards onClick={action('clicked')}></UIControlCards>
 
 export const ComplexInteractionCard = () => <ComplexInteractionCards onClick={action('clicked')}></ComplexInteractionCards>