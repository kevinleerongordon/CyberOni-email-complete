const requiredSloganTitles = ["intro", "whyus", "homeCta", "services","blogs"] as const;
type SloganKeys = (typeof requiredSloganTitles)[number];

export type Slogans = {
  [I in SloganKeys]?: {
    title: string;
    links?: { title?: string; url: string; local_file?: string };
    subtitle: string;

    message: string;
    description: string;
  };
};

// Check if requiredSloganTitles is empty
type DefaultSloganKeys = typeof requiredSloganTitles extends readonly [
  infer T,
  ...infer Rest,
]
  ? SloganKeys
  : "intro" | "whyus" | "homeCta" | "services" | "blogs";

export const sample_data: Slogans = {
  intro: {
    title: "Your Partner in Data Science Solutions",
    subtitle: "Delivering Data-Driven Solutions for Businesses",
    message: `Are you tired of using outdated strategies to grow your business? Are you struggling to keep up with the competition? Look no further than Cyberoni, the innovative software development company that specializes in data-driven solutions. Our team of experts is dedicated to helping businesses like yours succeed by harnessing the power of data science.`,
    links: {
      url: "https://drive.google.com/file/d/1QmJMPrif5MzLboNKG8hKyS0Glz58AaHm/view?usp=drivesdk",
      local_file: "/public/assets/slogan_assets/OurServices.zip",
      title: "Download Our Brochure (ZIP)",
    },
    description: "Intro Message",
  },
  whyus: {
    title: "Introducing Cyberoni - Your Partner in Data Science Solutions",
    subtitle: "Delivering Data-Driven Solutions for Businesses",
    message: "Unlock the Power of Your Data",
    links: {
      url: "https://cyberoni.com",
      title: "Learn More",
    },
    description: `At Cyberoni, we're passionate about helping businesses harness the full potential of their data. With our customized data science solutions, we can help you unlock valuable insights and make informed, data-driven decisions that drive business growth.\n\nOur team is made up of experienced data scientists, engineers, and analysts who will work closely with you to understand your unique business needs and goals. We'll identify the right data sources, develop actionable insights, and build custom AI solutions that integrate seamlessly with your existing business software.\n\nBut we don't stop there. We also believe in creating beautiful, easy-to-use interfaces that make it a joy to work with your data. From predictive modeling and machine learning to data visualization and dashboarding, our comprehensive suite of services will help you get the most out of your data.\n\nDon't just take our word for it - partner with Cyberoni and see the results for yourself. Contact us today to learn more about how we can help you achieve your business goals through data-driven solutions.`,
  },
  homeCta: {
    title:
      " Looking for a reliable and trustworthy partner to help your business succeed in the data-driven future?",
    subtitle: " Look no further than Cyberoni! ",
    message: `At Cyberoni, we bring a wealth of expertise and experience to the table to help businesses harness the power of data science. We offer a range of services, including web development, SaaS, marketing, and graphic design, all with a primary focus on delivering data-driven solutions tailored to meet the unique needs of our clients.

But we're not just about the services we offer. We believe in conducting business with integrity and ethics, always putting our clients first and going the extra mile to ensure their satisfaction. With a company culture built on transparency, honesty, and accountability, you can trust that you're working with a team that truly cares about your success.

So, if you're ready to take your business to the next level, contact Cyberoni today and let us help you thrive in the data-driven future!`,
    links: {
      url: "https://cyberoni.com",
      title: "Free Consultation",
    },
    description: `Look no further than Cyberoni! With a focus on delivering data-driven solutions tailored to meet the unique needs of our clients, we offer a range of services, including web development, SaaS, marketing, and graphic design. But more than that, we're committed to conducting business with integrity and ethics, always putting our clients first and going the extra mile to ensure their satisfaction. So why wait? Contact Cyberoni today and let us help you take your business to the next level!`,

  }, services: {
    title:
      "Ready to take your online presence to the next level? Partner with CyberOni for expert digital solutions!",
    subtitle: "Transform your digital world with CyberOni",
    message: `At CyberOni, we specialize in providing innovative and effective digital solutions to help businesses thrive in the online world. Our range of services includes web development, SaaS, marketing, and graphic design, all designed to help our clients achieve their goals and stand out in a crowded online marketplace.

But we're not just about delivering great services. We're committed to building long-term relationships with our clients based on trust, transparency, and accountability. Our team of experts will work closely with you to understand your unique needs and develop customized solutions that deliver real results.

So if you're ready to take your online presence to the next level, partner with CyberOni today and discover what's possible in the digital world!`,
    links: {
      url: "https://cyberoni.com/services",
      title: "Explore Our Services",
    },
    description: `Transform your digital world with CyberOni! Our expert team specializes in providing innovative and effective digital solutions to help businesses thrive in the online world.With a range of services that includes web development, SaaS, marketing, and graphic design, we'll work closely with you to understand your unique needs and develop customized solutions that deliver real results. So why wait? Partner with CyberOni today and take your online presence to the next level!`,

  }, blogs: {
    title: "Stay up to date with the latest digital trends and insights with CyberOni's blog!",
    subtitle: "Discover the Power of Digital Solutions",
    message: `At CyberOni, we believe in sharing our knowledge and expertise with the world. That's why we've created a blog dedicated to all things digital, from the latest trends and insights to tips and tricks for optimizing your online presence.

Our team of experts covers a wide range of topics, including web development, SaaS, marketing, graphic design, and more. Whether you're a business owner looking to stay ahead of the curve or a digital enthusiast eager to learn more, our blog is the perfect place to start.

But we don't just talk the talk - we walk the walk. Our blog is packed with real-world examples of how we've helped our clients achieve their goals through innovative and effective digital solutions. And if you're ready to take your online presence to the next level, we're here to help.

So what are you waiting for? Check out our blog today and discover the power of digital with CyberOni!`,
links: {
url: "https://cyberoni.com/blog",
title: "Read Our Blog",
},
description: `Stay up to date with the latest digital trends and insights with CyberOni's blog! Discover the power of digital with our team of experts, who cover a wide range of topics including web development, SaaS, marketing, graphic design, and more. Our blog is packed with real-world examples of how we've helped our clients achieve their goals through innovative and effective digital solutions. So why wait? Check out our blog today and take the first step towards optimizing your online presence!`,
},
  

};
