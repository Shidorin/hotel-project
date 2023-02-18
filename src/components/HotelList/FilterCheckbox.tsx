import { Fragment, useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdCheckCircle } from "react-icons/md"

interface IFilter {
    filterKey: string;
    filter?: string[];
    handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string[];
}
export const FilterCheckbox = ({ filterKey, filter, handleFilterChange, value }: IFilter) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const selectRef = useRef<HTMLSelectElement | null>(null);

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


    const selectedTag = value;
    const firstTag = selectedTag?.[0];
    const tagCount = selectedTag!.length - 1;

    return (
        <div className="filter-select">
            <div
                className={`label-select ${showDropdown ? 'dropdown' : ''}`}
                onClick={handleDropdownClick}
            >
                {selectedTag?.length === 0 ? <span style={{ backgroundColor: "#f0f0f0" }}> any </span> : ""}
                {selectedTag?.length !== 0 ? <span>{firstTag}</span> : ""}
                {tagCount > 0 && <span>+{tagCount}</span>}
                <MdOutlineKeyboardArrowDown style={{ marginLeft: "auto" }} />
            </div>
            {showDropdown && (
                <select
                    id={filterKey}
                    onChange={handleFilterChange}
                    multiple={true}
                    value={value}
                    ref={selectRef}
                >
                    {filter?.map((item, key) => (
                        <option
                            value={item}
                            key={key}
                        >
                            {item}
                            {selectedTag?.includes(item) &&
                                <MdCheckCircle
                                    style={{ width: "20px", height: "20px", marginLeft: "auto" }}
                                />}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}