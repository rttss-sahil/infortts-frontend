import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.scss';
import { BsArrowRight } from 'react-icons/bs'
import templateBlog from '../../../static/img/home/template/template-blog.png'
import templateBusiness from '../../../static/img/home/template/template-business.png'
import templateDesign from '../../../static/img/home/template/template-design.png'
import templateEducation from '../../../static/img/home/template/template-education.png'
import templatePhotography from '../../../static/img/home/template/template-photography.png';
import templateStore from '../../../static/img/home/template/template-store.png'
const Button = React.lazy(() => import('../../Others/Button'))
// const templateBlog = React.laz(() => import('../../../static/img/home/template/template-blog.png'))
const Home = () => {
  return (
    <div className="container">
      <div className="content first">
        <h1>Create a website,</h1>
        <h1>you're proud of</h1>
        <p>
          Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.
        </p>
        <Button text='Get Started' link='/get-started' />
      </div>
      <div className="content second">
        <div className="left">
          <h1>The Freedom to Create</h1>
          <h1>the Website You Want</h1>
        </div>
        <div className="right">
          <p>Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all with the Wix website builder.</p>
          <Link path="start-here">
            <span>Get Started</span>{' '}
            <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="content third">
        <h1>Professionally Designed</h1>
        <h1>Website Templates</h1>
        <p>Choose from 500+ customizable website templates that are built to meet your business needs.</p>
        <Link path="/website-template">
          <span>See All Website Templates</span>
          <BsArrowRight />
        </Link>
        <div className="templates">
          <Link className="item" path="/website-template/blog">
            <img src={templateBlog} alt="" />
            <h5>Blog</h5>
          </Link>
          <Link className="item" path="/website-template/business">
            <img src={templateBusiness} alt="" />
            <h5>Business</h5>
          </Link>
          <Link className="item" path="/website-template/design">
            <img src={templateDesign} alt="" />
            <h5>Design</h5>
          </Link>
          <Link className="item" path="/website-template/education">
            <img src={templateEducation} alt="" />
            <h5>Education</h5>
          </Link>
          <Link className="item" path="/website-template/photography">
            <img src={templatePhotography} alt="" />
            <h5>Photography</h5>
          </Link>
          <Link className="item" path="/website-template/store">
            <img src={templateStore} alt="" />
            <h5>Online Store</h5>
          </Link>
        </div>
      </div>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
      <h1>dkshbsjdkhfhjdsfj</h1>
    </div>
  )
}
export default Home;