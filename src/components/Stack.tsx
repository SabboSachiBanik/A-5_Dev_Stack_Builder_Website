import { Suspense, useState } from 'react';
import './Stack.css';
import Technologies from './Technologies';
import type { Technology } from '../types/Technology';


const technologiesDataPromise = fetch('/data.json')
    .then(res => res.json());


const Stack = () => {

    // Selected technologies
    const [selectedTechnologies, setSelectedTechnologies] =
        useState<Technology[]>([]);


   
    // Add Technology--------------

    const handleAddTechnology = (technology: Technology) => {

        setSelectedTechnologies(prev => {

            const alreadySelected = prev.some(
                item => item.id === technology.id
            );

            if (alreadySelected) {
                return prev;
            }

            return [...prev, technology];
        });
    };


   
    // Remove One Technology-----------
   

    const handleRemoveTechnology = (id: number) => {

        setSelectedTechnologies(prev =>
            prev.filter(technology => technology.id !== id)
        );
    };


    
    // Remove All--------------------
    

    const handleRemoveAll = () => {

        setSelectedTechnologies([]);

    };


    return (

        <section className="container mx-auto pt-20">


            {/* Heading */}

            <h1 className="font-extrabold text-4xl">

                Explore the{' '}

                <span className="gradient-text">
                    Technologies
                </span>

            </h1>


            <p className="text-[#4d4f53] pt-2 pb-5">

                Pick one technology per category to build your ideal stack.

            </p>



            {/* Main Layout */}
           

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">


                
                {/* A — Technologies */}
                

                <div className="col-span-1 md:col-span-3">

                    <Suspense
                        fallback={
                            <p>Loading.....</p>
                        }
                    >

                        <Technologies
                            technologiesDataPromise={
                                technologiesDataPromise
                            }

                            selectedTechnologies={
                                selectedTechnologies
                            }

                            onAdd={
                                handleAddTechnology
                            }
                        />

                    </Suspense>

                </div>



               
                {/* B — Your Stack */}
                

                <div className="col-span-1">

                    <div className="p-6 rounded-2xl Card-shadow">


                        {/* Your Stack Heading */}

                        <h2 className="font-bold text-2xl">
                            Your Stack
                        </h2>


                        {/* Selected Count */}

                        <p className="mt-2 mb-4">

                            {selectedTechnologies.length}{' '}

                            Technology Selected

                        </p>



                        
                        {/* Empty Stack */}
                        

                        {selectedTechnologies.length === 0 && (

                            <p className="p-7 border border-dashed border-gray-400 text-center">

                                Your Stack is empty.

                            </p>

                        )}



                        
                        {/* Selected Technologies */}
                        

                        <div className="space-y-3">

                            {selectedTechnologies.map(
                                (technology) => (

                                    <div
                                        key={technology.id}
                                        className="flex items-center justify-between border rounded-lg p-3"
                                    >


                                        {/* Icon + Name */}

                                        <div className="flex items-center gap-3">

                                            <img
                                                className="w-8 h-8"
                                                src={technology.iconUrl}
                                                alt={technology.name}
                                            />


                                            <div>

                                                <h3 className="font-bold">
                                                    {technology.name}
                                                </h3>

                                                <p className="text-xs text-gray-500">
                                                    {technology.category}
                                                </p>

                                            </div>

                                        </div>



                                        {/* X Button */}

                                        <button
                                            onClick={() =>
                                                handleRemoveTechnology(
                                                    technology.id
                                                )
                                            }

                                            className="text-gray-500 hover:text-[#D81B7E] text-xl"
                                        >

                                            ×

                                        </button>

                                    </div>

                                )
                            )}

                        </div>



                        
                        {/* Remove All */}

                        {selectedTechnologies.length > 0 && (

                            <button
                                onClick={handleRemoveAll}
                                className="w-full mt-5 py-2 text-[#D81B7E] font-semibold border border-gray-300 "
                            >
                                Remove All
                            </button>

                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};


export default Stack;