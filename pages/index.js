import styles from '../styles/Home.module.css'
const Home = () => {
  
  //get time
  let currentDT = new Date();
  const hour = currentDT.getHours();
  //set greeting
  const greeting = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
    return (
      <div className={styles.homeContainer}>
        <div className={styles.container}>
          <h1 className={styles.homeText}>{greeting}</h1>
          <h1 className={styles.homeText}>My</h1>
          <h1 className={styles.homeText}>Name</h1>
          <h1 className={styles.homeText}>Is</h1>
          <h1 className={styles.homeText}>Sam</h1>
        </div>


      </div>
    )
}

export default Home;
