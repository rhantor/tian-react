import React, { useEffect } from 'react'
import Blog from '../../pages/Blog'
import MainBanner from './MainBanner'

const BlogPage = () => {
  const title = document.querySelector('#page_title')
  useEffect(()=>{
    title.textContent = 'Tian | Blog'
  },[title])
  return (
    <>
    <MainBanner title={'Blog'} />
    <Blog />
    
    </>
  )
}

export default BlogPage