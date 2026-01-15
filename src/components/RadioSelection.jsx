export function RadioSelection({ selection, id }) {

    return (
        <>
            <div className={` cursor-pointer w-full border-2 border-grey500 px-6 py-3 rounded-lg flex gap-3 place-items-center justify-start hover:bg-white has-checked:bg-green200 has-checked:border-green600`}>
                <div className="w-6 h-6 flex place-items-center justify-center">
                    <input
                        required
                        type="radio"
                        id={id}
                        name="Q_type"
                        value={id}
                        className="
                        appearance-none w-5 h-5 border-2 border-grey500 rounded-full 
                        checked:border-green600 checked:bg-none
                        relative 
                        checked:before:content-[''] checked:before:block checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-green600 checked:before:rounded-full checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2
                    "
                    />
                </div>
                <label htmlFor={id} className="body-m-Regular text-grey900">{selection}</label>
            </div>
        </>
    )
}