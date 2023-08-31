'use client';
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from 'react';

const MainContent = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption2(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="p-4 w-[80%] h-[80%] mx-auto ">
      <h2 className="text-xl font-bold mb-4 mt-6">Welcome to Your Dashboard</h2>
      <div className='flex justify-center gap-4'>
      <div className="mb-4">
        <label className="block text-sm font-medium">Prepaid</label>
        <select
          className="mt-1 block w-full p-2 border rounded-md"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <option value="">Select Your PHC </option>
          <option value="option1">JED</option>
          <option value="option2">BED </option>
          <option value="option2">EKO </option>
          <option value="option2">KED </option>
          <option value="option2">ABJ </option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Pospaid</label>
        <select
          className="mt-1 block w-full p-2 border rounded-md"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <option value="">Select Your PHC</option>
          <option value="optionA">JED</option>
          <option value="optionB">KED</option>
          <option value="optionB">BED</option>
          <option value="optionB">ABJ</option>
          <option value="optionB">EKO</option>
        </select>
      </div>

      </div>
      
      
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
        <button
          type="submit"
          className="bg-gray-800 w-1/3 text-white p-2 rounded-md mt-4 text-xl"
        >
        Make Payment
        </button>
      </form>
    </div>
  );
};

export default MainContent;
