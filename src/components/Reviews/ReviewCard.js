import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dots from 'react-carousel-dots';
import "./Boxes.css"
import Boxes from './Boxes';


function ReviewCard() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => {
      return <Dots length={4} active={0} />
    }
  }

  return (
    <container>
      <h5 className='pt-4'>A few of our happy customers</h5>
      <Slider {...settings}>
        <div className='ps-3  pt-3 slider d-flex flex-row justify-content-between  '>
          <Boxes companyName="CrawlQ" name="Harish Kumar" job="CEO & Founder CrowlQ.oi"
            description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
            servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
        </div>
        <div className='ps-3 pt-3'>
          <Boxes companyName="Qandle" name="Chiyan Mukherje" job="CEO & Founder Qandle"
            description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
            servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
        </div>
        <div className='ps-3 pt-3'>
          <Boxes companyName="SuperBeings" name="Gourav" job="CEO & Founder"
            description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
            servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
        </div>
        <div className='ps-3 pt-3'>
          <Boxes companyName="appveen" name="Rakesh" job="Product marketing manager"
            description="Team growth.cx did a great job  in helping us revampe our website to make it stand on par with global Saas brands which turned our appsumo campaign into ahuge success"
            servises1="GTM Consulting" s2="Growth marketing" s3="Design" />
        </div>

      </Slider>
    </container>
  )
}

export default ReviewCard
