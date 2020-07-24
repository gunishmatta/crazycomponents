import React from 'react'
import {action} from '@storybook/addon-actions';
import BadgesVisiblity from '../components/material/Badges/BadgesVisiblity'
import CustomizedBadges from '../components/material/Badges/CustomizedBadges'
import DotBadges from '../components/material/Badges/DotBadges'
import MaximumValueBadges from '../components/material/Badges/MaximumValueBadges'
import SimpleBadges from '../components/material/Badges/SimpleBadges'

export default {
    component : SimpleBadges,
    title : 'Badges',
    excludeStories: /.*Data$/,
};


 export const SimpleBadge = () => <SimpleBadges onClick={action('clicked')}></SimpleBadges>;
 export const CustomizedBadge = () => <CustomizedBadges onClick={action('clicked')}></CustomizedBadges>

 export const DotBadge = () => <DotBadges onClick={action('clicked')}></DotBadges>
 
 export const MaximumValueBadge = () => <MaximumValueBadges onClick={action('clicked')}></MaximumValueBadges>
 
 export const BadgeVisiblity = () => <BadgesVisiblity onClick={action('clicked')}></BadgesVisiblity>
 
 