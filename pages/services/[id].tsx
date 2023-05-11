import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { ServiceWithID } from "@/data/sample_data/sample_services";
import { getServiceByID } from "@/data/services";
import { arr_sample_data } from "@/data/sample_data/sample_services"
import Layout from "@/components/layout";
import Services from "../services";
import ServiceComponent from "@/components/layout/services/service";
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





interface ServicePageProps {
    service: ServiceWithID;
}

export default function ServicePage({ service }: ServicePageProps) {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
        useBrains();
    const router = useRouter();

    // Render the service page using the data passed in as props
    return (
        
            <div >
            
            <ServiceComponent service={service } />
           
                <Services/>
            </div>
        
    );
}

// Generate the paths for all services at build time
export const getStaticPaths: GetStaticPaths = async () => {
    const services: ServiceWithID[] = arr_sample_data;
    const paths = services.map((service) => ({
        params: { id: service.id.toString() },
    }));

    return { paths, fallback: false };
};

// Fetch the data for a single service at build time
export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
    const id = Number(params!.id);

  
    const service: ServiceWithID | null = getServiceByID(id);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
};
