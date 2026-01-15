export function Message() {
    return (
        <>
            <div className="flex flex-col gap-2 ">
                <label htmlFor="message" className="text-grey900 body-ms">Message</label>
                <textarea required name="message" id="message" className="peer border-grey500 border-2 rounded-lg px-6 py-3 focus:outline-green600 user-invalid:border-redError"></textarea>
                <span className="hidden peer-user-invalid:block text-redError body-ms">This field is required</span>
            </div>
        </>
    )
}