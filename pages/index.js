import styles from '../styles/Home.module.css'
import {NavMain} from '../components'
const Home = () => { 
    return (
      <div className={styles.homeContainer}>
        <div className={styles.container}>
          <NavMain/>
        </div>
      </div>
    )
}

export default Home;
