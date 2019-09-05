import React, { Component } from "react";
import Newsparts from "../parts/Newsparts";
import image1 from "../img/news1.png";
import image2 from "../img/news2.png";
import image3 from "../img/news3.png";

export class News extends Component {
  render() {
    return (
      <section id='news' className='bg-light py-1'>
        <div className='container'>
          <h2 className='m-heading text-center'>Tensorfield in the news</h2>
          <div className='items'>
            <Newsparts
              image={image1}
              linkDetails='Agro Innovation Lab Robotics Challenge Audition Days'
              link='https://www.linkedin.com/feed/update/urn:li:activity:6535149306322780160'
            />
            <Newsparts
              image={image2}
              linkDetails='SVG Ventures Announces its THRIVE V Seed Accelerator Cohort'
              link='https://thriveagrifood.com/svg-ventures-announces-its-thrive-v-seed-accelerator-cohort/'
            />
            <Newsparts
              image={image3}
              linkDetails='Four New Startups Selected for Esteemed Wells Fargo Scholarship'
              link='http://www.wginnovation.com/blog/four-new-startups-selected-esteemed-wells-fargo-scholarship'
            />
          </div>
        </div>
      </section>
    );
  }
}

export default News;
