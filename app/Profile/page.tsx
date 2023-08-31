import React, { ChangeEvent } from 'react'

type Props = {}
const handleSubmit = (event: ChangeEvent) => {
  event.preventDefault();
  // Handle form submission here
};

export const page = (props: Props) => {
  return (
    <div className='w-full '>
      <h2 className="text-xl font-bold mb-4 mt-6">Welcome to Your Profile page</h2>
      <form  onSubmit={()=>handleSubmit}>
         <div>
            <label>Meter No:</label>
            <p>Your Meter Numbr {}</p>
        </div> 
        <div>
            <label>Phone No:</label>
            <br />
            <p> Your Phone Number {}</p>
        </div> 
        <div>
            <label>Amount</label>
            <br />
            <p>{}</p>
        </div> 
        <div>
        <label>
        Select a Date:
        <h2>Date of transactin {}</h2>
      </label>
        </div> 
        <button
          type="submit"
          className="bg-gray-800 w-1/3 text-white p-2 rounded-md mt-4 text-xl"
        >
       Save Changes
        </button>
      </form>

    </div>
  )
}