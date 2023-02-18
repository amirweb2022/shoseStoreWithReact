const ButtonSortAndFilter = ({ onClick, text, children }) => {
    return (
        <button
            className="w-1/2 bg-stone-50  shadow-md shadow-slate-400 mr-2 p-2 rounded-md flex justify-start items-center"
            onClick={onClick}
        >
            <span>
                {children}
            </span>
            <span className="text-sm text-slate-600 mr-2 font-bold">
                {text}
            </span>
        </button>
    );
}

export default ButtonSortAndFilter;