import SkillCard from './SkillCard'
import styles from '../styles/SkillsTables.module.css'
const SkillsTables = ({skills}) => {
    //console.log(skills)
    return(
        <div className={styles.Skills}>
            {/* loop through for keys and values */}
            {Object.entries(skills).map(([skillKey, values]) => (
                <SkillCard skillKey={skillKey} values={values}/>
                ))}
           
        </div>
    )
}
export default SkillsTables;