import React, { Component } from "react";

export class Faq extends Component {
  render() {
    return (
      <section id='faq'>
        <div className='faq-img'></div>
        <div className='faq-text bg-dark p-2'>
          <h2 className='m-heading text-center'>Frequently Asked Questions</h2>
          <div className='py-2'>
            <h4>How do you kill weeds without damaging crops?</h4>
            <p>
              We use the latest developments in computer vision software and
              hardware to accurately distinguish between crops and weeds, with
              over 6 years of experience applying deep learning for computer
              vision. Using cameras mounted to our machine, images of every
              single plant are captured and processed at over 100 times per
              second. Once the exact locations of the weeds are known, our
              precise heated vegetable oil sprayer is activated to ensure that
              only the weeds are treated, safely leaving the keeper crops to
              flourish.
            </p>
          </div>
          <div className='py-2'>
            <h4>What’s wrong with using herbicides?</h4>
            <p>
              An increasing number of weed species are becoming herbicide
              resistant, but no new herbicide modes of action have been
              introduced to the market for over 20 years. The cost of developing
              a new active product is estimated to be >$250M, and can take over
              10 years of research and development. Consumers are also becoming
              more wary of the health risks of using herbicides, driving an
              increase in organic produce.
            </p>
          </div>

          <div className='py-2'>
            <h4>Why use hot vegetable oil in particular?</h4>
            <p>
              Plants never evolved to deal with “wet heat”, making steam and hot
              oil so effective. Unlike cutting off the stem or using dry heat
              such as fire, wet heat penetrates the meristematic cells of the
              plant below the soil surface, which prevents it from growing back
              again. Vegetable oil is organic and enables us to transfer more
              heat than hot water, and is more precise with a shorter dwell time
              than steam.
            </p>
          </div>

          <div>
            <h4>What crops can you weed?</h4>
            <p>
              We are currently focused on spinach and lettuce crops on the West
              Coast of the US, but our technology is designed to work on any
              type of specialty row crop. In the future, changing from weeding
              one crop type to the next will be as simple as a software update.
            </p>
          </div>

          {/** <ul className='list'>{this.renderList()}</ul> */}
        </div>
      </section>
    );
  }
}

export default Faq;
