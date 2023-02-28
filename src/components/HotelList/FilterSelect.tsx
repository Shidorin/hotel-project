import { Fragment, useEffect, useRef, useState } from "react";
import { ITMP } from "../../interfaces/interfaces";
import { MdOutlineKeyboardArrowDown, MdCheckCircle } from "react-icons/md"

interface IFilter {
    filterKey: string;
    filter?: string[];
    handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string[];
}



type FilterSelectProps = {
    filterKey: keyof ITMP;
    filter: string[] | undefined;
    selectedFilter?: string[];
    onFilterChange: (selectId: keyof ITMP, selectedOption: string) => void;
};


// export const FilterSelect = ({ filterKey, filter, handleFilterChange, value }: IFilter) => {

export const FilterSelect = ({
    filterKey,
    filter,
    selectedFilter,
    onFilterChange,
}: FilterSelectProps) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !(selectRef.current as Node).contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);
    const selectedTag = selectedFilter || [];
    const firstTag = selectedTag[0];
    const tagCount = selectedFilter?.length !== 0 ? selectedTag.length - 1 : 0;


    const handleOptionClick = (optionValue: string) => {
        onFilterChange(filterKey, optionValue);
    };


    const dropdownTSX = (
        <div className="option-list">
            {filter?.map((item, key) => (
                <div
                    className="option"
                    role="option"
                    key={key}
                    onClick={() => handleOptionClick(item)}
                >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {selectedTag?.includes(item) && (
                        <MdCheckCircle
                            style={{
                                width: '20px',
                                height: '20px',
                                marginLeft: 'auto',
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    )

    return (
        <div
            ref={selectRef}
            className="filter-select"
        >
            <h4>{filterKey}</h4>
            <div
                className={`label-select ${showDropdown ? 'dropdown' : ''}`}
                role="select"
                onClick={handleDropdownClick}
            >
                {selectedTag?.length === 0 && <span
                    style={{ backgroundColor: '#f0f0f0' }}
                >
                    Any
                </span>}
                {selectedTag?.length !== 0 &&
                    <span>{firstTag?.charAt(0).toUpperCase() + firstTag!.slice(1)}</span>}
                {tagCount > 0 && <span>+{tagCount}</span>}
                {<MdOutlineKeyboardArrowDown style={{ marginLeft: 'auto' }} />}
            </div>
            {showDropdown && dropdownTSX}
        </div>
    );
};


    // return (
    //     <div className="filter-select">
    //         <div
    //             className={`label-select ${showDropdown ? 'dropdown' : ''}`}
    //             onClick={handleDropdownClick}
    //         >
    //             {selectedTag?.length === 0 ? <span style={{ backgroundColor: "#f0f0f0" }}> any </span> : ""}
    //             {selectedTag?.length !== 0 ? <span>{firstTag}</span> : ""}
    //             {tagCount > 0 && <span>+{tagCount}</span>}
    //             <MdOutlineKeyboardArrowDown style={{ marginLeft: "auto" }} />
    //         </div>
    //         {showDropdown && (
    //             <select
    //                 id={filterKey}
    //                 onChange={handleFilterChange}
    //                 multiple={true}
    //                 value={value}
    //                 ref={selectRef}
    //             >
    //                 {filter?.map((item, key) => (
    //                     <option
    //                         value={item}
    //                         key={key}
    //                     >
    //                         {item}
    //                         {selectedTag?.includes(item) &&
    //                             <MdCheckCircle
    //                                 style={{ width: "20px", height: "20px", marginLeft: "auto" }}
    //                             />}
    //                     </option>
    //                 ))}
    //             </select>
    //         )}
    //     </div>
    // )
//}