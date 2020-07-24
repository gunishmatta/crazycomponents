import React from 'react'
import {action} from '@storybook/addon-actions';
import IconAvatars from '../components/material/Avatars/IconAvatars'
import ImageAvatars from '../components/material/Avatars/ImageAvatars'
import LetterAvatars from '../components/material/Avatars/LetterAvatars'

export default {
    component : IconAvatars,
    title : 'Avatars',
    excludeStories: /.*Data$/,
};


 export const IconAvatar = () => <IconAvatars onClick={action('clicked')}></IconAvatars>;

 export const ImageAvatar = () => <ImageAvatars onClick={action('clicked')}></ImageAvatars>

 export const LetterAvatar = () => <LetterAvatars onClick={action('clicked')}></LetterAvatars>

 