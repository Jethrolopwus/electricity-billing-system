import Navbar from '@/Components/Navbar'
import React from 'react'
import Princing from '@/Components/Princing'
import Header from '@/Components/Dashboard/Header'
import MainContent from '@/Components/Dashboard/MainContent'
import Sidebar from '@/Components/Dashboard/Sidebar'


type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='flex'>
      <Sidebar/>
      <MainContent />
      </div>
      <Princing />
    </div>
  )
}

export default page