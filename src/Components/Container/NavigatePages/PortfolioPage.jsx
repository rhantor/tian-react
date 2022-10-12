import React, { useEffect } from 'react'
import Portfolio from '../../pages/Portfolio'
import MainBanner from './MainBanner'

const PortfolioPage = () => {
  const title = document.querySelector('#page_title')
  useEffect(()=>{
    title.textContent = 'Tian | Portfolio'
  },[title])
  return (
    <>
    <MainBanner title={'Portfolio'} />
    <Portfolio />
    </>
  )
}

export default PortfolioPage