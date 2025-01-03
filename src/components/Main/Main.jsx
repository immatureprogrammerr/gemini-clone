import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../../context/Context'

const Main = () => {

    const { 
        onSent, 
        recentPrompt, 
        showResult, 
        loading, 
        resultData, 
        setInput,
        input
    } = useContext(Context)

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSent(event.target.value)
        }
    }

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                { !showResult ? <>
                <div className="greet">
                    <p><span>Hello, Dev</span></p>
                    <p><span>How can I help you today?</span></p>
                </div>
                <div className="cards">
                <div className="card">
                    <p>Code suggestions</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Search for an idea</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Prepare a plan</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                
                <div className="card">
                    <p>Build a note</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                
            </div></> : <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{ recentPrompt }</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {
                        loading ? <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div> : <p dangerouslySetInnerHTML={{__html:resultData}} />
                    }
                </div>
            </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(event) => {
                            setInput(event.target.value)
                        }} onKeyDown={handleKeyDown} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent(input)} src={assets.send_icon} alt="" /> : null }
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double check its results.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main