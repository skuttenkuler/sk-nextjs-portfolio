import HomeButton from '../components/HomeButton'
import Image from 'next/image'
import styles from '../styles/About.module.css'
const About = () => {
    return(
        <div>
            <HomeButton/>
            <div className={styles.header}>
                <h1>I'm a<br/>
                Full Stack Engineer.</h1>
            </div>
            <div className={styles.picContainer}>
                        <Image
                        src="https://samkuttenk-resume.s3-us-west-1.amazonaws.com/blue_canvas.png"
                        alt="canvas"
                        layout="responsive"
                        width={100}
                        height={50}/>    
            </div>
                
            
            <div className={styles.aboutContainer}>
                <h3 className={styles.aboutText}>ABOUT</h3>
                <p className={styles.bio}> My name is Same Kuttenkuler and thank you for visiting my site. I am a Full Stack Engineer with a Bachelor’s of Science from Middle Tennesse State University.
                    I have spent the last 4 years designing and developing applications for the web and mobile. In 2020, I completed course 
                    work at the University of California, Berkely Bootcamp and recieved a certificate in Full Stack Web Development. 
                    Creative and curious. An adamant pursuer and lover of experiences. I pride myself on being a relentless problem solver and voracious learning. 
                    Every product I ship is carefully planned, developed, and designed to give the user the exact experiance my client aims to give.
                    Detailed oriented programmer with big picture mindset. 
                         
                </p>
            </div>
        </div>
    
    )       
};

export default About;