import './TechnologyCard.css';
import type { Technology } from '../types/Technology';

type TechnologyCardProps = {
    technology: Technology;
    isSelected: boolean;
    onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
    technology,
    isSelected,
    onAdd
}: TechnologyCardProps) => {

    return (
        <div
            className={`card-shadow rounded-2xl px-3 py-7 ${
                isSelected
                    ? 'border-2 border-[#D81B7E]'
                    : 'border-2 border-transparent'
            }`}
        >

            {/* Icon + Badge */}
            <div className="flex justify-between">

                <img
                    className="h-10"
                    src={technology.iconUrl}
                    alt={technology.name}
                />

                <h3 className='rounded-2xl m-3 px-3 bg-amber-100'>
                    {technology.badge}
                </h3>

            </div>


            {/* Technology Name */}
            <h1 className="my-5 font-bold text-xl">
                {technology.name}
            </h1>


            {/* Description */}
            <p className="py-1 mb-3">
                {technology.description}
            </p>


            {/* Category + Level + Rating */}
            <div className="flex justify-between pt-5 pb-5 border-t border-gray-200">

                <p className="rounded-sm px-2 bg-gray-200">
                    {technology.category}
                </p>

                <p>
                    {technology.level}
                </p>

                <div className="flex items-center gap-1">

                    <img
                        className="w-5"
                        src={technology.starIconUrl}
                        alt="Rating"
                    />

                    <p>
                        {technology.rating}
                    </p>

                </div>

            </div>


            {/* Add Button */}
            <button
                onClick={() => onAdd(technology)}
                disabled={isSelected}
                className={`w-full py-2 rounded-md ${
                    isSelected
                        ? 'bg-gray-100 text-[#D81B7E]'
                        : 'bg-black text-white'
                }`}
            >
                {isSelected
                    ? '✓ Added to Stack'
                    : 'Add to Stack'}
            </button>

        </div>
    );
};

export default TechnologyCard;