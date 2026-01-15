import { Button } from "./Button"
import { Message } from "./Message"
import { RadioSelection } from "./RadioSelection"
import { TextField } from "./TextField"
import { Notification } from "./Notification"
import { useEffect, useState } from "react"

export function Form() {
    // const [radio, setRadio] = useState(null);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log("formulario enviado")

        // setRadio(null)
        e.target.reset();
        setEnviado(true)
    }

    useEffect(() => {
        if (enviado) {
            const timer = setTimeout(() => {
                setEnviado(false);

            }, 2000);
            return () => clearTimeout(timer)
        }
    }, [enviado]);

    return (
        <>
            <div className="relative">
                <Notification enviado={enviado} />
                <form className="bg-white p-6 flex flex-col gap-10 rounded-2xl w-full md:w-172.5 md:p-10 lg:w-184 " onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-grey900 heading ">Contact Us</h1>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                                <TextField textLabel="First Name" type="text" name="fName" />
                                <TextField textLabel="Last Name" type="text" name="lName" />
                            </div>

                            <TextField textLabel="Email Address" type="email" name="email" />


                            <div className="flex flex-col gap-4 group">
                                <p className="body-ms text-grey900">Query Type</p>
                                <div className=" flex flex-col gap-4 md:flex-row ">
                                    <RadioSelection selection="General Enquiry" id="G_Enquiry" />
                                    <RadioSelection selection="Support Request" id="S_Request" />
                                </div>
                                <span className={`hidden group-has-user-invalid:block text-redError body-ms`}>Please select a query type</span>
                            </div>

                            <Message />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 group">
                        <label className="flex items-center gap-4 cursor-pointer ">
                            <div className="relative flex items-center justify-center">
                                <input aria-labelledby="consent" type="checkbox" required
                                    className="appearance-none w-4.5 h-4.5 border-2 border-grey500 checked:bg-green600 checked:border-green600" />

                                <div className="absolute w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 -translate-y-0.5 ">
                                </div>
                            </div>
                            <span id="consent" className="body-ms text-grey900">I consent to being contacted by the team</span>
                        </label>
                        <span className={`hidden group-has-user-invalid:block text-redError body-ms`}>To submit this form, please consent to being contacted</span>
                    </div>

                    <Button />

                </form>
            </div>
        </>
    )
}