import React from 'react'
import {action} from '@storybook/addon-actions';
import FontAwesomeIcons from '../components/material/Icons/FontAwesomeIcons'
import FontMaterialIcons from '../components/material/Icons/FontMaterialIcons'
import SvgIcons from '../components/material/Icons/SvgIcons'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : SvgIcons,
    title : 'Icons',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SvgIcon = () => <SvgIcons onClick={action('clicked')}></SvgIcons>;

 export const FontAwesomeIcon = () => <FontAwesomeIcons onClick={action('clicked')}></FontAwesomeIcons>
 export const FontMaterialIcon = () => <FontMaterialIcons onClick={action('clicked')}></FontMaterialIcons>
 