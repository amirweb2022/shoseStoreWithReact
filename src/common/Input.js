const Input = ({ label, name, formik, placeholder, type = "text" }) => {
    return (
        <div className="mt-2 flex justify-start items-start flex-col w-full">
            <label htmlFor={name} className="text-slate-600">{label}</label>
            <input
                id={name}
                type={type}
                {...formik.getFieldProps(name)}
                name={name}
                className="bg-white w-full my-2 border-2 border-slate-200 shadow-md p-2 outline-none rounded-md text-slate-600 
                text-sm focus:ring-2 focus:ring-blue-400 
                focus:ring-offset-1 focus:ring-offset-white"
                placeholder={placeholder}
            />
            {formik.errors[name] && formik.touched[name] && (
                <div className="text-red-400 text-sm">{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default Input;