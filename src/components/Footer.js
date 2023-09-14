import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className="custom-shape-divider-bottom-1694629396 " >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='footer-items'>
                <h1 className='text-white pt-4'>Set the foundation for an <br></br> aggressive growth</h1>
                <div className='btn bg-white fw-bold m-4'>Hope on a call</div>
                <div className='p-5 pt-3 text-white  footer-list'>

                    <ul>
                        <li className='fw-bold pb-2'>Our fixes</li>
                        <li>Team</li>
                        <li>Export</li>
                        <li>Content</li>
                    </ul>


                    <ul>
                        <li className='fw-bold pb-2'>Community</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>


                    <ul>
                        <li className='fw-bold pb-2'>Resourses</li>
                        <li>Eye-openers</li>
                        <li>Quiz</li>
                    </ul>


                    <ul>
                        <li className='fw-bold pb-2'>Social</li>
                        <li>Linkdln</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer
