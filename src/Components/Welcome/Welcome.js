import React from 'react'
import './Welcome.css'
import boredLogoRed from '../../assets/theBored-green.png'

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <h1 className='welcome-title'>Welcome to theBored</h1>
            <div className='welcome-txt'>
                <p>
                    We are pleased to welcome you to The Bored. The purpose of this application is to help you discover something new to do. Instead of thinking of things to do while you're bored, this application will generate an activity for you at random. Then, you can save it and it will appear on your board.
                </p>
                <p>
                    On your board, you can see all the activities that you have saved. If you decide that you don't want to do an activity, you can now either delete it from your board or mark it as done on your board after you've completed it. It will stay on your board so you don't have to remember if you've completed that activity or not.
                </p>
                <p>
                    I hope you enjoy using the application and that boredom no longer consumes your day. Get out there and try some things!
                </p>
                <img src={boredLogoRed} alt='bored logo' className='bored-logo-red'/>
            </div>
        </div>
    )
}

export default Welcome