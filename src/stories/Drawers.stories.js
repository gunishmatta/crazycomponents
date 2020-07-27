import React from 'react'
import {action} from '@storybook/addon-actions';
import TemporaryDrawers from '../components/material/Drawers/TemporaryDrawers'
import SwipeableTemporaryDrawers from '../components/material/Drawers/SwipeableTemporaryDrawers'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : TemporaryDrawers,
    title : 'Drawers',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const TemporaryDrawer = () => <TemporaryDrawers onClick={action('clicked')}></TemporaryDrawers>;

 export const SwipeableTemporaryDrawer = () => <SwipeableTemporaryDrawers onClick={action('clicked')}></SwipeableTemporaryDrawers>
 