import React from 'react'
import { Repository } from '../hooks/types'


type CardProps = {  
    repository: Repository
}
function Card({ repository: repo }: CardProps) {
  return (
    <div>
    <h3>{repo.name}</h3>
    <button>
        Like
    </button>
  </div>
  )
}

export default Card