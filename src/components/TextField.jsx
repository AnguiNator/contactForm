export function TextField({ textLabel, type, name }) {
    return (
        <>
            <div className="w-full flex flex-col gap-2">
                <label className="body-ms text-grey900" htmlFor={textLabel}>{textLabel}</label>
                <input type={type} id={name} name={name} required className="cursor-pointer peer rounded-lg border-grey500 border-2 px-6 py-3 text-grey900 body-m-Regular focus:outline-green600 hover:border-green600 user-invalid:border-redError user-invalid:focus:outline-redError" />
                <span className="hidden peer-user-invalid:block text-redError body-ms">{type !== 'email' ? "This field is required" : "Please enter a valid email address"}</span>
            </div>
        </>
    )
}