import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Article.module.css'

const ArticleItem = ({article, object_key}) => {
    return (
        <Link href={article.link.toString()} passHref={true}>
            <a className={styles.card}>
                <h3 key={object_key}>{article.title} &rarr;</h3>
                <Image src={article.thumbnail.toString()}
                  alt="article image"
                  height={500}
                  width={500}
                    />
            </a>
        </Link>
    )
}

export default ArticleItem;