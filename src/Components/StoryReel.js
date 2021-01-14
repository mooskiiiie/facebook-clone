import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            image='bastycover.png'
            title='Sebastian Vergara'
            profileSrc='pictureko.jpg'
            />
            <Story 
            image='bmcover.png'
            title='Brylle Vergara'
            profileSrc='bm.jpg'
            />
            <Story 
            image='shakicover.png'
            title='Miles Vergara'
            profileSrc='shaki.jpg'
            />
            <Story 
            image='gracecover.png'
            title='Grace Vergara'
            profileSrc='grace.jpg'
            />
            <Story
            image='briancover.png' 
            title='Brian Vergara'
            profileSrc='brian.jpg'
            />
        </div>
    )
}

export default StoryReel
