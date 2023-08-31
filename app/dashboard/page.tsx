import Navbar from '@/Components/Navbar'
import React from 'react'
import Princing from '@/Components/Princing'
import Header from '@/Components/Dashboard/Header'
import MainContent from '@/Components/Dashboard/MainContent'
import Sidebar from '@/Components/Dashboard/Sidebar'
import HomepageComponent from '@/Components/Home'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar/> */}
      <Header />
      <MainContent />
      {/* <HomepageComponent /> */}
      <Princing />
    </div>
  )
}

export default page