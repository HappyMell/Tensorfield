import React, { Component } from "react";
import HowList from "../parts/HowParts";
export class How extends Component {
  render() {
    return (
      <section id='how' className='bg-light py-1'>
        <div className='container'>
          <h2 className='m-heading text-center'>
            Thermal non contact precision weeding
          </h2>
          <p className='text-center'>
            Tensorfield Agriculture is pioneering the commercial adoption of
            thermal micro dosing for weed control. Based on research from UC
            Davis, we eradicate weeds using only heated vegetable oil. Our
            machines operate autonomously, with each machine equalling the
            throughput of a 40 person crew, starting with spinach and lettuce
            fields in the US.
          </p>
          <div className='items'>
            <HowList
              icon='fas fa-globe-americas fa-4x'
              title='No soil disturbance'
              details='We don&#39;t break the soil crust, effective in all soil types without damaging the keeper plants'
            />
            <HowList
              icon='fas fa-crosshairs fa-4x'
              title='½ Inch precision'
              details='Our thermal micro dosing sprayer enables us to kill weeds in densely planted beds with ½ inch precision'
            />
            <HowList
              icon='fas fa-leaf fa-4x'
              title='Organic friendly'
              details='We use
              only heated vegetable oil to kill weeds no extensive herbicide inventory required'
            />
          </div>
        </div>
      </section>
    );
  }
}

export default How;
