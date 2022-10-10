interface InsuranceItemProps {
    id: number;
    checked: boolean | undefined;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => void;
}

export const FilterCheckbox = ({ id, checked, onChange }: InsuranceItemProps) => {
    return (
        <div>
            <label className="checkbox">
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