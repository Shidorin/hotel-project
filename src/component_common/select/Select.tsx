import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"


interface IOption {
    label: string;
    value: string;
}

interface SelectProps {
    keySelect: string;
    value: IOption[];
    selected: string;
    handleSelectChange: (selectedOption: string, key: string) => void;
    disabled?: boolean;
};

export const Select = ({
    keySelect,
    value,
    selected,
    handleSelectChange,
    disabled
}: SelectProps) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);


    // selected option
    const handleDropdownClick = () => {
        if (disabled) return;
        setShowDropdown(!showDropdown);
    };

    // hide dropdown when outside click
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


    const handleChange = (value: string, keySelect: string) => {

        handleSelectChange(value, keySelect)
        setShowDropdown(false);
    }

    const dropdownTSX = (
        <div className="option-list small"
            style={{ color: "black" }}>
            {value.map((item, key) => (
                <div
                    className="option small"
                    role="option"
                    key={key}
                    onClick={() => {handleChange(item.value, keySelect) }}
                    aria-selected={selected === item.label ? "true" : "false"}
                >
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </div>
            ))}
        </div>
    )


    return (
        <div
            ref={selectRef}
            className="filter-select small"
        >
            <div
                className={`label-select ${showDropdown ? 'dropdown' : ''}`}
                role="listbox"
                onClick={handleDropdownClick}
                style={{ color: "black" }}
            >
                <span>{selected}</span>
                {<MdOutlineKeyboardArrowDown style={{ marginLeft: 'auto' }} />}
            </div>
            {showDropdown && dropdownTSX}
        </div>
    )
}