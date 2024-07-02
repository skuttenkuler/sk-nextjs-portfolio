import React from 'react'

export const Astroid = ({size, skill, x, y}) => {
    return(
        <div style={{
            position: 'absolute',
            left: x,
            top: y,
            width: `${size * 20}px`,
            height: `${size * 20}px`,
            backgroundColor: 'gray',
            borderRadius: '50%',
            display:'flex',
            justifyContent:'center',
            textAlign:'center'

        }}>
            {skill}
        </div>
    )
}

