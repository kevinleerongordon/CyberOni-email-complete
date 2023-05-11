import { Database, Globe2, Home, LayoutTemplate, Send, SmartphoneCharging,Cpu } from 'lucide-react';
import React, {useEffect,useState} from 'react';
import { Service, servicesArrayType, ServiceWithID } from '@/data/sample_data/sample_services';
import { Slogans as SlogansType ,} from '@/data/sample_dynamic_data/slogans';
import Link from 'next/link';
import TagList from '../FilterButtons';

interface Props {
    services: servicesArrayType;
    slogans: SlogansType;
}

const ServicesSection: React.FC<Props> = ({ services, slogans }) => {
    
    const [statefulServices, setServices] = useState<servicesArrayType>(services);

    const icon = {
        width: 35,
        height: 35
    }

    let setServiceIcon = (tag: string) => {
        switch (tag) {
            case 'web':
                return <LayoutTemplate color="blue"  width={icon.width} height={icon.height} />;
            case 'data':
                return <Database color="blue" width={icon.width} height={icon.height} />;
            case 'mobile':
                return <SmartphoneCharging color="blue" width={icon.width} height={icon.height} />;
            case 'marketing':
                return <Send color="blue" width={icon.width} height={icon.height} />;
            case 'home':
                return <Home color="blue" width={icon.width} height={icon.height} />;
            default:
                return Math.random() < 0.5 ? <Globe2 color="blue" width={icon.width} height={icon.height} /> : <Cpu color="blue" width={icon.width} height={icon.height} />;
        }
    }


    function getUniqueTags(): string[] {
        const tags = services.reduce((acc: string[], service: ServiceWithID) => {
            service.tags?.forEach((tag: string) => {
                if (!acc.includes(tag)) {
                    acc.push(tag);
                }
            });
            return acc;
        }, []);
        return Array.from(new Set(tags));
    }
    
    const uniqueTags: string[] = getUniqueTags()

    function filterServicesByTag(tag: string): ServiceWithID[] {
        let newServices = services.filter((service) => service.tags?.includes(tag))
        setServices(newServices)
        return newServices;
    }

    let clear_state = () => {
        setServices(services)
    }

    useEffect(() => {
        
        return () => {}
    },
    //eslint-disable-next-line
    []);
    return (
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 w-full">
                        <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                            <span className="block mb-2 text-lg font-semibold text-primary">
                                {slogans.services?.title}
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                {slogans.services?.subtitle}
                            </h2>
                            {/* <p className="text-base text-body-color">
                                {slogans.services?.description}
                            </p> */}
                        </div>
                        <TagList tags={uniqueTags} clearState={clear_state} filterByTag={filterServicesByTag}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {statefulServices.map((service) => (
                        <div className="px-4 w-full md:w-1/2 lg:w-1/3" key={Object.keys(services)[0]}>
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                    {setServiceIcon(service.more_details.description) }
                                </div>
                                <h4 className="mb-3 text-xl font-semibold text-dark">{service.preview.title}</h4>
                                <p className="text-body-color">{service.preview.content}</p>
                                <Link href={`/services/${service.id}`}>
                                    <span className='text-blue-500 underline'>Learn More</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;