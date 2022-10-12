import React from 'react'
import { Link } from 'react-router-dom'
import MainBanner from '../Container/NavigatePages/MainBanner'

const Thanks = () => {
  return (
   <>
   <MainBanner title={'Thank You'} />
   <section className="send-message-info section-padding">
		<div className="container text-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="682.667" height="682.667" preserveAspectRatio="xMidYMid meet" version="1.0" viewBox="0 0 512 512"><g fill="#000" stroke="none"><path d="M212.5 22.1c-48 4.6-94.3 24.5-131 56.2-17.6 15.1-28.9 28-42 47.7-43.3 64.9-51.4 145.8-21.8 218.5 29.1 71.8 93.5 125.1 170.2 141.1 20.6 4.2 50.6 5.7 71.9 3.3 100.9-10.9 184.5-87 204.6-186.2 3.8-18.7 4.9-32.6 4.4-53.5-.5-20.2-1.1-23-6.4-27.1-7-5.5-15.8-4.7-21.8 1.9-4.1 4.6-3.9 2.9-3.7 27 .3 20.6-1.4 35.8-5.5 53C413.5 376.7 356 434.3 283 452.4c-78 19.3-161.4-10.4-210-74.9-60.1-79.8-53.1-192.3 16.6-263C156 47.1 256.5 33.8 338.2 81.6c4.2 2.5 9.1 4.9 10.9 5.4 10.5 3 21.8-8.5 18.9-19.2-1.5-5.4-4.3-8.2-13.6-13.8-40.8-24.7-93.8-36.6-141.9-31.9z"/><path d="M490.6 43.5c-3.2 1.1-27.8 25.2-116.8 114.2L261 270.5l-43.7-43.7c-24.1-24-45.1-44.2-46.6-44.8-4.2-1.5-8.3-1.2-12.7 1-6.8 3.5-10 10.7-8 18.2 1 3.8 6.9 10.1 50.8 54.1 27.3 27.4 51.4 50.7 53.4 51.8 4.2 2.1 8.3 2.4 12.5.9 3.8-1.5 242.1-239.5 243.9-243.7 5.4-12.4-7.2-25.5-20-20.8z"/></g></svg>
			<h4>Your message has been sent successfully.</h4>
			<p>
        <Link to={'/react-templates/tian'} className="contact_btn">Back to Home</Link></p>
		</div>
	</section>
   
   </>
  )
}

export default Thanks