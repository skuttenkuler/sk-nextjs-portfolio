import ArticleLink from './ArticleLink'
import styles from '../styles/Articles.module.css'

const ArticleList = ({articles}) => {

    // console.log(articles)
    return(
        <ul className={styles.ArticleList}>
        {articles.items.map((article) => (
                <ArticleLink article={article}/>
            ))} 
        </ul>
    )
}

export default ArticleList;
