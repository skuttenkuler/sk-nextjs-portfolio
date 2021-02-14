import ArticleList from '../components/ArticleList'
import HomeButton from '../components/HomeButton'
const Blog = ({articles}) => {
    return(
        <>
        <HomeButton/>
        <ArticleList articles={articles}/>
        </>
        )
};

//fetch medium articles using rss2json(medium gives xml, we want json return object)
export const getStaticProps = async () => {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sam.kuttenk')
    const articles = await res.json();
    
    //return props object
    return{
        props: {
            articles
        }
    }
}
export default Blog;