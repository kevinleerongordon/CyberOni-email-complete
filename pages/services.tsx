import React from 'react'
import ServicesSection from "@/components/layout/services/dynamicServices"
import Layout from '@/components/layout'
import { useContext } from "react";
import { MyContext } from "@/context/brains";


const useBrains = () => {
    const brains = useContext(MyContext);
    console.log("BrainsContext", brains);
    const brainKeys = Object.keys(brains);
    const brainsLoaded = brains.isLoaded;
    const brainsMobile = brains.isMobileState;
    const brainsSiteOwner = brains.siteOwner;

    return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner };
};


const Services = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
        useBrains();
    return (
        <Layout><ServicesSection slogans={brainsSiteOwner.slogans} services={brainsSiteOwner.services!} /></Layout>
    )
}

export default Services