// import React, { useState } from 'react';
import { Modal } from 'antd';
import { ChangeEvent, FormEvent, useState } from 'react';



const SigninModal = ({setIsSignInModalOpen}:{setIsSignInModalOpen : React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleOk = () => {
    setIsSignInModalOpen(false)
  };
  const handleCancel = () => {
    setIsSignInModalOpen(false)
  };
  
  const [data, setData] = useState({
    userName: '',
    email: '',
    password:''
  })
 const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let obj = {
      ...data
    };
    
    const res = await fetch('api/auth/login', {
      method: 'POST',
      body: JSON.stringify(obj)
    });

    if (res.ok) {
      const  data = await res.json()
      // console.log(data)
      localStorage.setItem('user', JSON.stringify(data))
      alert('Sign in successful')
      return
    }
  }

  return (
    <div className=''>
    <div className=''>
      <Modal
        title="Login Form"
        open={true}
        onOk={handleOk}
        okText="Login"
        onCancel={handleCancel}
        okButtonProps={{
          disabled: false,
          style: {
            background: '#000',  
            borderColor: '#1890ff',  
            color: '#fff', 
            fontSize: '16px'          
          },
        }}
        cancelButtonProps={{
          disabled: false,
         
        }}
       footer={null}
      >
       <form onSubmit={handleSubmit}>
      
        <div>
          <label className='text-lg font-bold'>EMAIL</label> <br />
          <input className='w-[200px] text-xl'  type='email' placeholder='Enter Your Email' name='email' onChange={handleInputChange} />
        </div>
        <div>
          <label className='text-lg font-bold'>PASSWORD</label> <br />
          <input className='w-[200px] text-xl' type='password' placeholder='Enter Your Password' name='password' onChange={handleInputChange} />
            </div>
            
             <button type='submit' className='w-[160px] rounded-lg bg-blue-900 text-white text-lg hover:bg-slate-600 p-3 mt-4'>
              submit
        </button>
        </form>
      </Modal>
      {/* <div className='bg-white max-w-[10rem]'>
        <div>
          <p>This is a modalform</p>
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default SigninModal;
