import React from 'react'
import {action} from '@storybook/addon-actions';
import BreadCrumbsWithIcons from '../components/material/BreadCrumbs/BreadCrumbsWithIcons'
import CollapsedBreadCrumbs from '../components/material/BreadCrumbs/CollapsedBreadCrumbs'
import CustomSeparators from '../components/material/BreadCrumbs/CustomSeparators'
import CustomizedBreadCrumbs from '../components/material/BreadCrumbs/CustomizedBreadCrumbs'
import SimpleBreadCrumbs from '../components/material/BreadCrumbs/SimpleBreadCrumbs'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : SimpleBreadCrumbs,
    title : 'BreadCrumbs',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],

};


 export const SimpleBreadCrumb = () => <SimpleBreadCrumbs onClick={action('clicked')}></SimpleBreadCrumbs>;

 export const BreadCrumbsWithIcon = () => <BreadCrumbsWithIcons onClick={action('clicked')}></BreadCrumbsWithIcons>
 export const CollapsedBreadCrumb = () => <CollapsedBreadCrumbs onClick={action('clicked')}></CollapsedBreadCrumbs>
 export const CustomSeparator = () => <CustomSeparators onClick={action('clicked')}></CustomSeparators>
 export const CustomizedBreadCrumb = () => <CustomizedBreadCrumbs onClick={action('clicked')}></CustomizedBreadCrumbs>


 