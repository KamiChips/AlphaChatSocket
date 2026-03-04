interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: "button" | "submit";
    className?: string;
}

export default function Button({label, onClick, type="button", className=""}:ButtonProps){
    return(
        <button
        onClick={onClick}
        type={type}
        className={`${className}`}
        >
            {label}
        </button>
    );
}