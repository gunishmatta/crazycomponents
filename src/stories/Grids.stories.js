import React from 'react'
import {action} from '@storybook/addon-actions';
import AutoLayouts from '../components/material/Grids/AutoLayouts'
import BasicGrids from '../components/material/Grids/BasicGrids'
import CSSGridLayouts from '../components/material/Grids/CSSGridLayouts'
import ComplexGrids from '../components/material/Grids/ComplexGrids'
import GridwithBreakpoints from '../components/material/Grids/GridwithBreakpoints'
import NegativeMargins from '../components/material/Grids/NegativeMargins'
import NestedGrids from '../components/material/Grids/NestedGrids'
import Spacings from '../components/material/Grids/Spacings'

export default {
    component : AutoLayouts,
    title : 'Grids',
    excludeStories: /.*Data$/,
};


 export const AutoLayout = () => <AutoLayouts onClick={action('clicked')}></AutoLayouts>;

 export const BasicGrid = () => <BasicGrids onClick={action('clicked')}></BasicGrids>
 export const CSSGridLayout = () => <CSSGridLayouts onClick={action('clicked')}></CSSGridLayouts>
 export const ComplexGrid = () => <ComplexGrids onClick={action('clicked')}></ComplexGrids>
 export const GridwithBreakpoint = () => <GridwithBreakpoints onClick={action('clicked')}></GridwithBreakpoints>

 export const NegativeMargin = () => <NegativeMargins onClick={action('clicked')}></NegativeMargins>

 export const NestedGrid = () => <NestedGrids onClick={action('clicked')}></NestedGrids>
 
 export const Spacing = () => <Spacings onClick={action('clicked')}></Spacings>
 