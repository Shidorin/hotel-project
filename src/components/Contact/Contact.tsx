import { useState } from 'react';
import './Contact.css'

interface IForm {
    firstName?: string,
    lastName?: string,
    email?: string,
    phoneNumber?: string,
    destination?: string,
    reason?: string,
    message?: string,
}

interface IInputs {
    "id": number,
    "varName": keyof IForm,
    "text": string
}

export const Contact = () => {
    const [formData, setFormData] = useState<IForm>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        destination: "",
        reason: "",
        message: undefined,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
        // Perform form submission logic here
    };

    const [inputs] = useState<IInputs[]>([
        {
            id: 1,
            varName: "firstName",
            text: "First Name",
        },
        {
            id: 2,
            varName: "lastName",
            text: "Last Name",
        },
        {
            id: 3,
            varName: "email",
            text: "Email",
        },
        {
            id: 4,
            varName: "phoneNumber",
            text: "Phone number",
        },
        {
            id: 5,
            varName: "destination",
            text: "Destination",
        },
        {
            id: 6,
            varName: "reason",
            text: "Reason for contact",
        },
    ])





    const formTSX = (
        <>
            <div className='form-container'>
                {inputs.map((input, key) => (
                    <div key={key}>
                        <input
                            key={`input-${key}`}
                            type="text"
                            name={input.varName}
                            id={input.varName}
                            value={formData[input.varName]}
                            onChange={handleChange}
                        />
                        <label
                            key={`label-${key}`}
                            className={`${formData[input.varName] ? "active" : ""}`}
                            htmlFor={input.varName}
                        >
                            {input.text}
                        </label>
                    </div>
                ))}
            </div>

            <div className='text-area-div' >
                <textarea
                    // type="text"
                    name="message"
                    id="message"
                    value={formData.message}
                    style={{

                    }}
                    rows={7}
                    cols={50}
                    onChange={handleChange}
                />
                <label className={`${formData.message ? "active" : ""}`} htmlFor="message">How can we help you?</label>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
                <button className='submit-btn' type="submit">Submit</button>
            </div>
        </>


    )


    return (
        <main>
            <div className='row'>

                <h1>Contact us</h1>
                <form
                    onSubmit={handleSubmit}
                    className='form'
                // style={{ maxWidth: "100rem", margin: "auto" }}
                >
                    {formTSX}
                </form >
            </div>
        </main>
    );
}