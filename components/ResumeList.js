
import Image from 'next/image'
import styles from '../styles/Resume.module.css';

    

const ResumeList = () => {
    return(
       <div>
            <Image
                src={'https://samkuttenk-resume.s3-us-west-1.amazonaws.com/Berkley_Certificate.png'}
                alt="Berklee certification"
                height={250}
                width={500}/>
            <Image
                src={'https://samkuttenk-resume.s3-us-west-1.amazonaws.com/Stanford_Certificate.png'}
                alt="stanford certification"
                height={250}
                width={500}/>

       </div>
    ) 
}

export default ResumeList;