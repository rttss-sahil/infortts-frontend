import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.scss';
import { BsArrowRight } from 'react-icons/bs'
const Button = React.lazy(() => import('../../Others/Button'))
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
        <h1>Professionally Designed</h1>
        <h1>Website Templates</h1>
        <p>Choose from 500+ customizable website templates that are built to meet your business needs.</p>
        <Link path="/website-template">
          <span>See All Website Templates</span>
          <BsArrowRight />
        </Link>
        <div className="templates">
          <div className="item">
            <img src="../../../static/img/home/template-blog.png" alt="" />
            <h5>Blog</h5>
          </div>
          <div className="item">
            <img src="../../../static/img/home/template/template-blog.png" alt="" />
            <h5>Blog</h5>
          </div>
          <div className="item">
            <img src="../../../static/img/home/template/template-blog.png" alt="" />
            <h5>Blog</h5>
          </div>
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