import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

interface StarRatingProps {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1

    if (starValue <= rating) {
      return <FaStar key={index} color='#ffc107' />
    } else if (starValue - 0.5 <= rating) {
      return <FaStarHalfAlt key={index} color='#ffc107' />
    } else {
      return <FaRegStar key={index} color='#ccc' />
    }
  })

  return <div className='flex flex-row'>{stars}</div>
}

export default StarRating
