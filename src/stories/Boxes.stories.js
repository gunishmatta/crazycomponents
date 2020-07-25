import React from 'react'
import {action} from '@storybook/addon-actions';
import CloneExamples from '../components/material/Boxes/CloneExamples'
import CommonExamples from '../components/material/Boxes/CommonExamples'
import PropsExamples from '../components/material/Boxes/PropsExamples'

export default {
    component : CommonExamples,
    title : 'Boxes',
    excludeStories: /.*Data$/,
};


 export const CommonExample = () => <CommonExamples onClick={action('clicked')}></CommonExamples>;

 export const CloneExample = () => <CloneExamples onClick={action('clicked')}></CloneExamples>
 export const PropsExample = () => <PropsExamples onClick={action('clicked')}></PropsExamples>
 