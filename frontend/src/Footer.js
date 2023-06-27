import React from 'react';
import SimpleReactFooter from 'simple-react-footer';
import './App.css';

const Footer = () => {
  // Define the data for the footer
  const description = "Explore, Discover, and Connect through Food. Our platform is your gateway to a world of culinary inspiration. Discover a vast collection of carefully curated recipes from around the globe. Connect with a community of food enthusiasts, share your own recipes, and embark on a delicious journey. Let DishDive be your guide as you explore the art of cooking, one dish at a time.";
  const title = "D I S H D I V E";

  const columns = [{
    title: "Follow Us",
    resources: [{
      name: "instagram",
      link: "/"
    },{
      name: "Facebook",
      link: "/"
    },{
      name: "Twitter",
      link: "/"
    }]
  },{
    title: "Legal",
    resources: [{
      name: "Privacy Policy",
      link: "/"
    },{
      name: "Terms and conditions",
      link: "/"
    }]
  }];

  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    backgroundColor = '#2C3333'
    fontColor = 'white'
    className = 'footer'
    copyright = '2023 DishDive. All rights reserved.'
  />;
}

export default Footer;