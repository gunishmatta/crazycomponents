import React from 'react'
import {action} from '@storybook/addon-actions';
import AppBarWithButtons from '../components/material/AppBars/AppBarWithButtons'
import AppBarWithMenus from '../components/material/AppBars/AppBarWithMenus'
import AppBarwithPrimarySearchFields from '../components/material/AppBars/AppBarWithPrimarySearchFields'
import AppBarwithSearchFields from '../components/material/AppBars/AppBarwithSearchFields'
import DenseAppBars from '../components/material/AppBars/DenseAppBars'
import SimpleAppBars from '../components/material/AppBars/SimpleAppBars'

export default {
    component : SimpleAppBars,
    title : 'App Bars',
    excludeStories: /.*Data$/,
};


 export const SimpleAppBar = () => <SimpleAppBars onClick={action('clicked')}></SimpleAppBars>;

 export const DenseAppBar = () => <DenseAppBars onClick={action('clicked')}></DenseAppBars>
 export const AppBarWithButton = () => <AppBarWithButtons onClick={action('clicked')}></AppBarWithButtons>
 export const AppBarWithMenu = () => <AppBarWithMenus onClick={action('clicked')}></AppBarWithMenus>
 export const AppBarwithSearchField = () => <AppBarwithSearchFields onClick={action('clicked')}></AppBarwithSearchFields>

 export const AppBarwithPrimarySearchField = () => <AppBarwithPrimarySearchFields onClick={action('clicked')}></AppBarwithPrimarySearchFields>

 