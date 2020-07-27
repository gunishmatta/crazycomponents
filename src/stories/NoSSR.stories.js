import React from 'react'
import {action} from '@storybook/addon-actions';
import ClientSideDeferrings from '../components/material/NoSSR/ClientSideDeferrings'
import FrameDeferrings from '../components/material/NoSSR/FrameDeferrings'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : ClientSideDeferrings,
    title : 'No Server Side Rendering',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const ClientSideDeferring = () => <ClientSideDeferrings onClick={action('clicked')}></ClientSideDeferrings>;

 export const FrameDeferring = () => <FrameDeferrings onClick={action('clicked')}></FrameDeferrings>
 