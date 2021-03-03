import './index.css'
import React from 'react'
import Card from './Card'
import { dataOne, dataTwo } from './data'

const DailyNews = () => {
    return (
        <>
            <h2 className="daily">DAILY NEWS</h2>
            <>
            <div className="daily-news-cards">
                {
                    dataOne.map(card => <Card key={card.id} image={card.image} caption={card.caption} />)
                }
            </div>
            <hr />
            <div className='daily-news-cards'>
                {
                    dataTwo.map(card => <Card key={card.id} image={card.image} caption={card.caption} />)
                }
            </div>
            </>
        </>
    )
}

export default DailyNews