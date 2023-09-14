import React from 'react'
import "./Review.css"
import Container from 'react-bootstrap/esm/Container'
import Review1 from './Review1/Review1'
import Review2 from './Review2/Review2'
import Media from 'react-media';

function Review() {
  return (
    <div className='customers-reviews '>
      <Container fluid>
        <h2 className='pt-5 pb-5'>A few of our happy customers </h2>
        <div className='d-flex flex-column'>
          <div className='review1'>
            <Review1 companyName="CrawlQ" name="Harish Kumar" job="CEO & Founder CrowlQ.oi"
              description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
              servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
          </div>
          <div className='review2'>
            <Review2 companyName="Qandle" name="Chiyan Mukherje" job="CEO & Founder Qandle"
              description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
              servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
          </div>

          <div className='review3'>
            <Review1 companyName="SuperBeings" name="Gourav" job="CEO & Founder"
              description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
              servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
          </div>
          <div className='review4'>
            <Review2 companyName="appveen" name="Rakesh" job="Product marketing manager"
              description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
              servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
          </div>

        </div>
      </Container>
    </div>


  )
}

export default Review
