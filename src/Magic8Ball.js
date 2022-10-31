import React, { useState } from 'react';
import Wisdom from './Wisdom'
import './Magic8Ball.css'

const Magic8Ball = () => {
    const [answer, setAnswer] = useState('Think of a question')
    const [color, setColor] = useState('black')
    const [clicked, setClicked] = useState(null)
    function getWisdom() {
        let randomNum = Math.floor(Math.random() * Wisdom.length)
        setAnswer(Wisdom[randomNum].msg);
        setColor(Wisdom[randomNum].color);
        setClicked('clicked')
        setTimeout(() => {
            setClicked(null)
        }, 100);
    }

    return (
        <button id="Magic8Ball" className={`${color} ${clicked}`} onClick={getWisdom}>
            <p>{answer}</p>
        </button>
    )

}
export default Magic8Ball