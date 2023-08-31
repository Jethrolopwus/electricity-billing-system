import React, { ChangeEvent } from 'react'

type Props = {}
const handleSubmit = (event: ChangeEvent) => {
  event.preventDefault();
  // Handle form submission here
};

export const page = (props: Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 mt-6">Welcome to Your Dashboard</h2>


     
      <form  onSubmit={()=>handleSubmit}>
         <div>
            <label>Meter No:</label>
            <br />
            <input type='number' placeholder='Enter Your Meter Number' />
        </div> 
        <div>
            <label>Phone No:</label>
            <br />
            <input type='number' placeholder='Enter Your Phone Number' />
        </div> 
        <div>
            <label>Amount</label>
            <br />
            <input type='number' placeholder='Enter Amount' />
        </div> 
        <div>
            <label>Date</label>
            <br />
            <input type='date' placeholder='Enter Amount' />
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