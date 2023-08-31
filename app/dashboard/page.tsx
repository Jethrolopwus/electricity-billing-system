import Navbar from '@/Components/Navbar'
import React from 'react'
import Home from '../page'
import Princing from '@/Components/Princing'
import SignUpModal from '@/Components/Modals/SignUpModal'
import Header from '@/Components/Dashboard/Header'
import MainContent from '@/Components/Dashboard/MainContent'
import Sidebar from '@/Components/Dashboard/Sidebar'
import SigninModal from '@/Components/Modals/SignInModal'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Header />
      <MainContent />
      <Sidebar/>
      <Home />
      <Princing />
      <SigninModal setIsSignInModalOpen={function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.')
      } }/>
      <SignUpModal setIsSignUpModalOpen={function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.')
      } } />
    </div>
  )
}

export default page