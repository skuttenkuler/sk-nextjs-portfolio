import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/ProjectsList.module.css'

const ProjectItem = ({project, object_key}) => {
    return (
        <Link href={project.deployed} passHref={true}>
            <a className={styles.card}>
                <h3 key={object_key}>{project.title} &rarr;</h3>
                <Image src={project.thumbnail}
                  alt="project image"
                  height={500}
                  width={500}
                    />
            </a>
        </Link>
    )
}

export default ProjectItem;