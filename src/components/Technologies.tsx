import { use } from 'react';
import TechnologyCard from './TechnologyCard';
import type { Technology } from '../types/Technology';

type TechnologiesProps = {
    technologiesDataPromise: Promise<Technology[]>;
    selectedTechnologies: Technology[];
    onAdd: (technology: Technology) => void;
};

const Technologies = ({
    technologiesDataPromise,
    selectedTechnologies,
    onAdd
}: TechnologiesProps) => {

    const technologies = use(technologiesDataPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {technologies.map((technology) => {

                const isSelected = selectedTechnologies.some(
                    selected => selected.id === technology.id
                );

                return (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        isSelected={isSelected}
                        onAdd={onAdd}
                    />
                );
            })}

        </div>
    );
};

export default Technologies;