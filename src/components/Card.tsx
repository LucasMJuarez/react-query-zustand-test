import React from 'react'
import { Repository } from '../hooks/types'


type CardProps = {  
    repository: Repository
    isFavorite: boolean
}
function Card({ repository: repo, isFavorite }: CardProps) {
  return (
    <div>
    <h3>{repo.name}</h3>
    <button>
        {isFavorite ? 'dislike' : 'like'}
    </button>
  </div>
  )
}

export default Card