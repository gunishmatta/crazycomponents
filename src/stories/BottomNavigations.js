import React from 'react'
import {action} from '@storybook/addon-actions';
import BottomNavigations from '../components/material/BottomNavigations/BottomNavigations'
import BottomNavigationsWithNoLabels from '../components/material/BottomNavigations/BottomNavigationsWithNoLabels'


export default {
    component : BottomNavigations,
    title : 'Bottom Navigations',
    excludeStories: /.*Data$/,
};


 export const BottomNavigation = () => <BottomNavigations onClick={action('clicked')}></BottomNavigations>;

 export const BottomNavigationsWithNoLabel = () => <BottomNavigationsWithNoLabels onClick={action('clicked')}></BottomNavigationsWithNoLabels>
 