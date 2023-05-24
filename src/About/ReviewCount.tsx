import React from 'react'

function ReviewCount() {
  return (
    <div className='px-4 py-4'>
        <div className='grid grid-cols-4'>
            <div className='flex flex-col space-y-1 items-center'>
                <span className='font-semibold text-2xl'>890 M</span>
                <span>Total Freelancer</span>
            </div>
            <div className='flex flex-col space-y-1 items-center'>
                <span className='font-semibold text-2xl'>750 M</span>
                <span>Positive Review</span>
            </div>
            <div className='flex flex-col space-y-1 items-center'>
                <span className='font-semibold text-2xl'>98 M</span>
                <span>Order received</span>
            </div>
            <div className='flex flex-col space-y-1 items-center'>
                <span className='font-semibold text-2xl'>336 M</span>
                <span>Projects Completed</span>
            </div>
        </div>
    </div>
  )
}

export default ReviewCount