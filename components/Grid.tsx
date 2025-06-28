import React from 'react'
import { BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        {[{id: 1, title: "title1", description: "description1"}].map((item) => (<BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
        />))} 
    </section>
  )
}

export default Grid