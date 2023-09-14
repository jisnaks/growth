import React from 'react'
import profile from "/Rogersoft/growth/src/assets/unknown.png"
import quotes from "/Rogersoft/growth/src/assets/quotesup.png"
import "./Review2.css"

function Review2({ companyName, name, description, job, servises1, s2, s3 }) {
  return (
    <div className='box p-3 border  border-dark border-3 rounded-5 arrow-bottom'>
      <div className='quotes'>
        <img src={quotes} alt="quotes" />
      </div>
      <div className='d-flex '>
        <div className='image pe-4'>
          <img src={profile} alt="img" />
        </div>
        <div className='content text-start'>
          <h4>{companyName}</h4>
          <h6>{name}</h6>
          <h6>{job}</h6>
          <p>{description}</p>
        </div>
      </div>
      <div className='text-start'>
        <h6>Services Privided:</h6>
        <div className=' services  d-flex flex-row  gap-2'>
          <div className='p-1'> {servises1}</div>
          <div className='p-1'>{s2}</div>
          <div className='p-1'>{s3}</div>
        </div>
      </div>
      <div className='right-arrow'></div>
    </div>

  )
}

export default Review2
