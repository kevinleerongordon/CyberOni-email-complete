import {  BlogList } from '@/components/layout/blog/blog_list'
import { BlogHome } from '@/components/layout/blog/blog_home';
import Layout from "@/components/layout";
import { MyContext } from "@/context/brains";
import { useContext } from "react";

const useBrains = () => {
  const brains = useContext(MyContext);
  console.log("BrainsContext", brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;

  return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner };
};


const Blogs = () => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
    useBrains();
  const featuredBlogs = brainsSiteOwner.blogs!.filter((blog) => blog.featured)
  console.log("featuredBlogs",featuredBlogs)
  return (
    <Layout>
      <BlogList slogans={brainsSiteOwner.slogans} blogs={brainsSiteOwner.blogs!} />
      <BlogHome featuredBlogs={featuredBlogs } />
    
    </Layout>
  );
};

export default Blogs;