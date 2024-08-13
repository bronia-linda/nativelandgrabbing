import React from "react";
import { VideoCard } from "../../components";
import BlogList from "./BlogList";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const BlogDetails = ({ slug }) => {
  const bannerData = [];
  return (
    <div className="app-wrapper">
      <VideoCard heroBanner={bannerData.length && bannerData[0]} />
      <div className="video-text">
        <h1>Lakeview Elegance</h1>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
      <h3>Related Videos</h3>
      <BlogList className="" />
    </div>
  );
};

export async function getStaticPaths() {
  // Example static paths
  return {
    paths: [{ params: { slug: "single" } }],
    fallback: false, // Can also be true or 'blocking'
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Fetch data based on params.id
  return {
    props: { slug },
  };
}

export default BlogDetails;
