import React from 'react'
import useWindowResize from './UseWindowResize'
import Review from './Review';
import ReviewCard from './ReviewCard';

function RspReview() {

  const { width, height } = useWindowResize();
  console.log(width, height);
  return (
    <div>
      <div >{width < 600 ? <ReviewCard /> : <Review />}</div>;
    </div>
  )
}

export default RspReview
