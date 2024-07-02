import React,{useState, useEffect, useRef} from 'react'
import {Astroid} from './Astroid'
import {skills} from '../../data/skills'


const data = Object.values(skills).flat()

export const SkilltroidsGame = () => {
    const [asteroids, setAstroids] = useState()

    useEffect(async() => {
        const list = data.map((_, i) => ({
            key: i,
            size: Math.ceil(Math.random() * 3),
            skill: data[i],
            x: Math.random() * 250,
            y: Math.random() * 250 - 100
        }))
        setAstroids(list)
        
    },[])

    return(
        <div>
            {asteroids ? asteroids.map(a => {
                return <Astroid key={a.key} size={a.size} skill={a.skill} x={a.x} y={a.y}/>
            }): null}
        </div>
    )
}
export async function getStaticProps() {
    return { props: { skills } }
  }
