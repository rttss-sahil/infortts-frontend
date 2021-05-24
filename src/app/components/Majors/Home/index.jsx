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
import contentFourth from "../../../static/img/home/content-fourth.png";
import logo from '../../../static/img/brand/logo_dark.svg'
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
          <p>Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all with the Infortts website builder.</p>
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
      <div className="content fourth">
        <div className="left">
          <div className="up">
            <h1>Build Your Unique</h1>
            <h1>Online Presence</h1>
            <p>To create your own website, follow these steps:</p>
          </div>
          <div className="down">
            <div className="steps">
              <p>Choose a plan</p>
              <p>Pick a template and customize anything, or answer a few questions and get a free website designed just for you.</p>
            </div>
            <div className="steps">
              <p>Add advanced features</p>
              <p>Start your own blog, add an online store and accept bookings online. You can always add more features as you grow.</p>
            </div>
            <div className="steps">
              <p>Edit your mobile view</p>
              <p>Check out the mobile-optimized version of your site. Switch to the Mobile Editor to personalize it even more.</p>
            </div>
            <div className="steps">
              <p>Optimize for search engine</p>
              <p>Get a robust suite of SEO tools to help you grow your organic traffic and maximize how your site performs on search.</p>
            </div>
          </div>
          <Link path="/start-here">
            <span>Start Now</span>{' '}
            <BsArrowRight />
          </Link>
        </div>
        <div className="right">
          <img src={contentFourth} alt="" />
        </div>
      </div>
      <div className="content fifth">
        <div className="left">
          <h1>Why Infortts.com</h1>
          <h1>All in one Package</h1>
          <h1>Is the Best</h1>
          <h1>Choice for You</h1>
        </div>
        <div className="right">
          <p>With 85% of consumers searching online before making a purchase, it’s never been more important for your business to have a website. </p>
          <p>Create a free and professional website using Infortts. With over 500 customizable, eye-catching templates, free reliable web hosting, powerful SEO tools and 24/7 customer care, Infortts is more than just a website builder, it’s a complete online business solution.</p>
          <p>Sell your products with built-in ecommerce features, and take bookings for your services. Use the integrated marketing and customer management tools to help drive sales and conversions.</p>
          <p>Over 9 million people worldwide have chosen Infortts to create a free website. And you can do it, too.</p>
          <Link path="start-here">
            <span>Start Now</span>{' '}
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="content sixth">
        <h1>FAQ</h1>
        <div className="faq">
          <div className="question">
            <span>1.</span>
            <span>Is it easy to build a website?</span>
          </div>
          <p>Yes. Infortts offers a few different ways to create your own free website, so you can choose the creation process that works best for you. Need to get online fast? Answer a few simple questions and Infortts ADI (Artificial Design Intelligence) will build a professional website for you in under 10 minutes. If you want 100% design freedom, start from scratch and drag and drop the website design features you need in the Infortts Editor.</p>
        </div>
        <div className="faq">
          <div className="question">
            <span>2.</span>
            <span>How do I make my site mobile friendly?</span>
          </div>
          <p>Your Infortts website automatically comes with a mobile-optimized version that looks great on smaller screens. The Infortts Mobile Editor makes it easy to customize your mobile site even more.</p>
        </div>
        <div className="faq">
          <div className="question">
            <span>3.</span>
            <span>Should I use a website builder or hire a web developer?</span>
          </div>
          <p>The free Infortts website builder is intuitive to use. Looking for a specific web service? Explore the Infortts Marketplace to find a certified freelancer or agency at a price that fits your budget.</p>
        </div>
        <div className="faq">
          <div className="question">
            <span>4.</span>
            <span>How can I optimize my site for SEO on Infortts?</span>
          </div>
          <p>All Infortts sites come with a suite of built-in SEO tools to help you compete in organic search. Get listed on Google in seconds with our Google integration. Customize your site’s meta tags, URL slugs, canonical tags, structured data, robots.txt file and more.</p>
        </div>
        <div className="faq">
          <div className="question">
            <span>5.</span>
            <span>Can I use a website builder to create a landing page?</span>
          </div>
          <p>Absolutely! You can create any kind of website with Infortts. Explore beautiful HTML landing page templates to get started today. </p>
        </div>
      </div>
      <div className="content seventh">
        <div className="column">
          <h3>PRODUCT</h3>
          <Link path="/website-template">Templates</Link>
          <Link path="/website-template">SEO</Link>
          <Link path="/website-template">Marketing</Link>
          <Link path="/website-template">Blogs</Link>
          <Link path="/website-template">Hosting</Link>
        </div>
        <div className="column">
          <h3>COMPANY</h3>
          <Link path="/website-template">Templates</Link>
          <Link path="/website-template">SEO</Link>
          <Link path="/website-template">Marketing</Link>
          <Link path="/website-template">Blogs</Link>
          <Link path="/website-template">Hosting</Link>
        </div>
        <div className="column">
          <h3>SUPPORT</h3>
          <Link path="/website-template">Templates</Link>
          <Link path="/website-template">SEO</Link>
          <Link path="/website-template">Marketing</Link>
          <Link path="/website-template">Blogs</Link>
          <Link path="/website-template">Hosting</Link>
        </div>
        <div className="column">
          <label>
            <img src={logo} alt="" />
            <span>infortts.com</span>
          </label>
          <p>Promote your business, showcase your art, set up an online shop or just test out new ideas. The Wix website builder has everything you need to create a fully personalized, high-quality free website.</p>
          <p>© 2009-2021 Infortts.com, Inc</p>
          <div className="links">

          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;