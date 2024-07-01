import React, {useState} from 'react'
import {PrevButton} from '../components/Nav'
import styles from '../styles/About.module.css'

const About = () => {
    const [text, setText] = useState("RESUME");
    return(
        <div className={styles.aboutPage}>
             <PrevButton prev="" page="Home."/>
            <div className={styles.header}>
                <h1>I design and create digital experiences.</h1>
            </div>

            <div className={styles.picContainer}>
                <img
                src="/static/aboutpic.png"
                id="aboutpic"
                alt="canvas"
                className="responsive"
                /> 
            </div>
            
            <div className={styles.aboutContainer}>
                <h3 className={styles.aboutText}>ABOUT</h3>
                <p className={styles.bio}>&emsp; My name is Sam Kuttenkuler and thank you for visiting my site. I am a Full Stack Engineer with a Bachelor’s of Science from Middle Tennesse State University.
                    I have spent the last 4 years designing and developing applications for the web and mobile mediums. In 2020, I completed course 
                    work at the University of California, Berkeley Bootcamp and received a certificate in Full Stack Web Development. 
                    <br/>&emsp;Creative and curious. Diligent and meticulous. Previously a professional musician, I brought my all to delivering experiences. 
                    I bring that same passion and drive for user experience with every product I ship. I am an adamant pursuer and lover of tailoring memories and moments while aiming to leave lasting impressions with everyone that uses my apps.
                    I pride myself on being a relentless problem solver and voracious learner. 
                    Every product I build and ship is carefully planned, developed, and designed to give the user the exact experience my client aims to give from the tech stack to the UX/UI.
                    I have been successful in this approach being a detail oriented programmer while remaining in a big picture mindset. If you have an idea for an application, please visit my contact page and let's build something great.       
                <br/>
                <br/>
                <a id="pdf" href="/static/Resume_SamKuttenkuler.pdf"download onMouseEnter={() => setText("DOWNLOAD") } onMouseLeave={() => setText("RESUME")}>{text}</a>
                </p>
                
            </div>
        </div>
    
    )       
};

export default About;