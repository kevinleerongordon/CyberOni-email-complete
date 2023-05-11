import { useState } from 'react';

type Props = {
    tags: string[];
    filterByTag: (tag: string) => void;
    clearState: () => void;
}

const TagList = ({ tags, filterByTag, clearState }: Props) => {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        filterByTag(tag);
    }

    const handleClearClick = () => {
        setActiveTag(null);
        clearState();
    }

    return (
        <div className="flex flex-wrap justify-center items-center mb-6">
            <button
                className={`p-3 m-2 text-2xl uppercase rounded-full rounded-br-none border border-black shadow-lg duration-200 outline-none hover:shadow-xl hover:rounded-full ${!activeTag ? 'text-white bg-black' : ''}`}
                onClick={handleClearClick}
            >
                All
            </button>
            {tags.map(tag => (
                <button
                    key={tag}
                    className={`p-3 m-2 text-2xl uppercase rounded-full rounded-br-none border border-black shadow-lg duration-200 outline-none hover:shadow-xl hover:rounded-full ${activeTag === tag ? 'bg-black text-white' : ''}`}
                    onClick={() => handleTagClick(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};

export default TagList;
