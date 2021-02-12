import React, {useState} from 'react'
import {server} from '../config'
import Image from 'next/image'
import HomeButton from '../components/HomeButton'
import styles from '../styles/About.module.css'
import SkillsTables from '../components/SkillsTables';
const About = ({skills}) => {

   
        const [text, setText] = useState("RESUME");
     
    
        const resumeLink = (text) => {
            //console.log("switched")
            setText(text);
        }
      

    return(
        <div className={styles.aboutPage}>
            <HomeButton/>
            <div className={styles.header}>
                <h1>I design and create digital experiances.</h1>
            </div>
            <div className={styles.picContainer}>
                        <Image
                        id="aboutpic"
                        src="/images/aboutpic.png"
                        alt="canvas"
                        width={1920}
                        height={1080}
                        layout="responsive"
                        />    
            </div>
            <SkillsTables skills={skills}/>
            
            <div className={styles.aboutContainer}>
                <h3 className={styles.aboutText}>ABOUT</h3>
                <p className={styles.bio}>&emsp; My name is Same Kuttenkuler and thank you for visiting my site. I am a Full Stack Engineer with a Bachelor’s of Science from Middle Tennesse State University.
                    I have spent the last 4 years designing and developing applications for the web and mobile mediums. In 2020, I completed course 
                    work at the University of California, Berkely Bootcamp and recieved a certificate in Full Stack Web Development. 
                    <br/>&emsp;Creative and curious. Diligent and meticulous. Previously a proffesional musician, I brought my all to deliver experiances. 
                    I bring that same passion and drive for user experience with every product I ship. I am an adamant pursuer and lover of tailering experiances and aim to leave a lasting impression with everyone my product comes in contact with
                    I pride myself on being a relentless problem solver and voracious learning. 
                    every product I ship is carefully planned, developed, and designed to give the user the exact experiance my client aims to give.
                    Detailed oriented programmer with big picture mindset.       
                <br/>
                <br/>
                <a id="pdf" href="/images/Resume_SamKuttenkuler.pdf"download onMouseEnter={() => resumeLink("DOWNLOAD") } onMouseLeave={() => resumeLink("RESUME")}>{text}</a>
                </p>
                
            </div>
        </div>
    
    )       
};
export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/skills`)
    const skills = await res.json();
    
    //return props object
    return{
        props: {
            skills
        }
    }
}

export default About;