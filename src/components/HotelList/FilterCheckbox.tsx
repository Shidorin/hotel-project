interface IFilter {
    // id: string;
    filterKey: string;
    filter?: string[];
    // onChange: (
    //     event: React.ChangeEvent<HTMLInputElement>,
    //     id: string
    // ) => void;
    handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string[];
}
export const FilterCheckbox = ({ filterKey, filter, handleFilterChange, value }: IFilter) => {

    /*
    TODO
    styling
    //do zmiany nazwy
    */
    // console.log("tablica:")
    // console.log(value)
    return (
        <div className="filter-select">
            <label className="checkbox">
                {filterKey}
            </label>
            <select
                id={filterKey}
                onChange={handleFilterChange}
                multiple={true}
                value={value}
            // value={selectedFilter ? selectedFilter.value : ""}
            // onChange={e => onChange(e, id)}
            >
                <option value="" disabled>
                    any
                </option>
                {filter?.map((item, key) => (
                    <option
                        value={item}
                        key={key}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}