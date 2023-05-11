import React from 'react';
import { SubProject } from '@/data/sample_data/sample_services';
import Image from 'next/image';

type SubProjectCardProps = {
    subProject: SubProject;
};

const SubProjectCard: React.FC<SubProjectCardProps> = ({ subProject }) => {
    return (
        <div className="px-8 py-12 bg-white rounded-2xl shadow-xl sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">{subProject.title}</h3>
                <p className="mb-6">{subProject.description}</p>
                <a href="#" className="block font-medium text-purple-600">Know more</a>
            </div>
            <Image width={900} height={600} src={subProject.imageUrl} className="-mb-12 ml-auto w-2/3" alt={subProject.title} loading="lazy"  />
        </div>
    );
};

type SubProjectGridProps = {
    subProjects: SubProject[];
};

const SubProjectGrid: React.FC<SubProjectGridProps> = ({ subProjects }) => {
    return (
        <div className="py-16 bg-purple-200">
            <div className="container px-6 m-auto text-gray-500 md:px-12 xl:px-0">
                <div className="grid gap-6 mx-auto md:w-3/4 lg:w-full lg:grid-cols-3">
                    {subProjects.map(subProject => (
                        <div key={subProject.id} className="md:block sm:hidden">
                            <SubProjectCard subProject={subProject} />
                        </div>
                    ))}
                    {subProjects.map(subProject => (
                        <div key={subProject.id} className="hidden md:block">
                            <SubProjectCard subProject={subProject} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubProjectGrid;
