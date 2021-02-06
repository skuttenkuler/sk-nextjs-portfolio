import ArticleItem from './ArticleItem'
import styles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {

    console.log(articles)
    return(
        <div className={styles.grid}>
            {articles.items.map((article, object_key) => (
                <ArticleItem article={article} key={object_key}/>
            ))} 
        </div>
    )
}

export default ArticleList;