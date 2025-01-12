import React from "react";
import Nafbar from "../Components/Nafbar";
import Logo from "../Components/Logo";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Section from "../Components/Section";
import Trading from "../Components/Trading";
import TopCatergories from "../Components/TopCatergories";
import NewsLetter from "../Components/NewsLetter";


const Page = () => {
  return (
    <div>
      <Nafbar></Nafbar>
      <Logo></Logo>
      <Hero></Hero>
      <Products></Products>
      <Section></Section>
      <Trading></Trading>
      <TopCatergories/>
      <NewsLetter/>
      </div>
  );
};

export default Page;
