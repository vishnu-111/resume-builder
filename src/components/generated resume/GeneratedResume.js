import React from 'react'

const GeneratedResume = ({personalDetails,profileImg}) => {
    console.log('Inside Generated Resume',personalDetails,profileImg);
  return (
    <div className='row '>
        <div className='col-4'>
            <div>
                <img src="./empty-profile-picture.png" alt="defaut- profile-pic"/>
            </div>
            <div>
                <ul>
                    <li>Contact</li>
                    <i class="bi bi-1-circle"></i>
                </ul>

            </div>
        </div>
        <div className='col-8'>
            
        </div>
    </div>
  )
}

export default GeneratedResume