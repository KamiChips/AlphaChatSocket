interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;
    disable?:boolean;
}

export default function Button({label, onClick, type="button", className="", disable}:ButtonProps){
    return(
        <button
        onClick={onClick}
        type={type}
        className={`${className}`}
        disabled={disable}
        >
            {label}
        </button>
    );
}