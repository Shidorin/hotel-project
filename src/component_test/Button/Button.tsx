import './button.css'

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Button = ({
    onClick,
    disabled,
    className,
    children
}: ButtonProps) => {

    return (

        <button
            type="submit"
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}