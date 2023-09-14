import React from 'react'
import profile from "/Rogersoft/growth/src/assets/unknown.png";


function Boxes({ companyName, name, description, job, servises1, s2, s3 }) {
  return (
    <div className='boxes p-3 border border-dark border-3 rounded-5 arrow-bottom'>
      <div className=''>
        <div className='content text-start'>
          <div className='d-flex flex-start headings'>
            <img className='photo me-3' src={profile} alt="img" />
            <div className=''>
              <h6>{companyName}</h6>
              <h7>{name}</h7><br></br>
              <h7>{job}</h7>
            </div>
          </div>
          <p>{description}</p>
          <div className='text-start'>
            <h6>Services Privided:</h6>
            <div className='fs-6 services  d-flex flex-row  gap-2'>
              <div className='p-1'>{servises1}</div>
              <div className='p-1'>{s2}</div>
              <div className='p-1'>{s3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boxes
