import styles from '../styles/Home.module.css'
import Nav from '../components/HomeNav/HomeNav'
const Home = () => { 
    return (
      <div className={styles.homeContainer}>
        <div className={styles.container}>
          <Nav/>
        </div>
      </div>
    )
}

export default Home;
