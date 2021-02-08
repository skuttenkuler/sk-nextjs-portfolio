
import styles from '../styles/About.module.css'
const About = () => {
    return(
        <div>
            <div className={styles.header}>
                <h1>I am a Full Stack Engineer.</h1>
            </div>
            {/* Image maybe? */}
            
            <div className={styles.aboutContainer}>
                <h3>About</h3>
                <h4>Elevator Pitch </h4>
                <p> Full Stack Web Developer with a Bachelor’s of Science that brings a 
                    strong creative approach to not only the front end design but veracious problem. Recently procuring certifications from Stanford University 
                    in Machine Learning as well as a certificate in Full Stack Web Development 
                    from UC Berkeley. I utilize my creativity and knowledge of a variety of tools 
                    such as React, Django, AWS, Python, and Javascript to build dynamic 
                    and engaging applications for web and mobile.  
                </p>
            </div>
        </div>
            
};

export default About;