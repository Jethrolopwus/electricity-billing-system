'use client'
import Navbar from '@/Components/Navbar'
import React, { use, useEffect } from 'react'
import Princing from '@/Components/Princing'
import Header from '@/Components/Dashboard/Header'
import MainContent from '@/Components/Dashboard/MainContent'
import Sidebar from '@/Components/Dashboard/Sidebar'
import { redirect } from 'next/navigation'


type Props = {}

const DashboardPage = (props: Props) => {

  
  const user = localStorage.getItem('user')
  useEffect(() => {
    if (!user) {
      redirect('/')
    }
  })
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className='flex'>
      <Sidebar/>
      <MainContent data={user}/>
      </div>
      <Princing />
    </div>
  )
}

export default DashboardPage