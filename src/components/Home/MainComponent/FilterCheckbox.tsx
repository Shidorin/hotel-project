import { IFilter } from "../../../interfaces/interfaces";

interface InsuranceItemProps {
    id: string;
    checked: boolean;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => void;
}

export const FilterCheckbox = ({ id, checked, onChange }: InsuranceItemProps) => {
    return (
        <div>
            <label className="checkbox">
                {id}
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => onChange(e, id)}
                    id={id.toString()}
                />
            </label>
        </div>
    )
}