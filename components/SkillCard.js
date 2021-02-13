import styles from '../styles/SkillsCard.module.css'
const SkillCard = ({skillKey, values}) => {
    //console.log(skillKey)
    return (
        
            <div className={styles.skillCardContainer}>
                <h3 className={styles.skillHeader}>{skillKey}</h3>
                <div className={styles.listContainer}>
                        {values.map((val, i) => (
                        <ul className={styles.skillList}>
                          <li key={i}>{val}</li>  
                        </ul>
                        ))}
                        </div>
            </div>

    )
}

export default SkillCard;