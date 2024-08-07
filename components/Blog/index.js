import moment from 'moment'
import Link from 'next/link'
import styles from '../../styles/Articles.module.css'


export const ArticleLink = ({article, key}) => {
    let time = article.pubDate
    let published = moment(time).format('MMMM Do YYYY')

    return (
        <div key={key} className="articles">
            <Link href="">
                <a className={styles.article} onClick={() => window.open(`${article.link}`, '_blank')}>
                    <h4 id="article-title" className={styles.articleTitle}>{article.title}</h4>
                <div className="p-details"id="article-details">
                    
                    <p id="pub-date"className={styles.date}>{published}</p>
                </div>
                </a>
            </Link>
        </div>     
            )
    }

export const ArticleList = ({articles}) => {
    return(
        <ul className={styles.ArticleList}>
        {articles.items.map((article) => (
                <ArticleLink article={article}/>
            ))} 
        </ul>
    )
}