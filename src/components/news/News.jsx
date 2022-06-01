import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const News = () => {

    const APP_KEY = "mZ0l4iW4ybf3ohJwsSzPNfTdSSneXljV";
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${APP_KEY}`)
            console.log(response)
            setArticles(response.data.results)
        }
        getArticles()
    }, [])

    return (
        <div className='container news__container'>
            {articles.map(article => {
                return (
                    <NewsItem 
                        // key={article.id}
                        title={article.title}
                        url={article.url}
                        image={article.multimedia[0].url}
                        source={article.byline}
                    />
                )
            })}
        </div>
      )
    }

export default News