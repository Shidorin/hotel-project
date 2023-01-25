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

export const Contact = () => {
    const [formData, setFormData] = useState<IForm>({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        phoneNumber: undefined,
        destination: undefined,
        reason: undefined,
        message: undefined,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
        // Perform form submission logic here
    };






    const formTSX = (
        <>
            <div className='form-container'>
                <div>

                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                </div>

                <div>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                </div>

                <div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <label htmlFor="phoneNumber">Phone number</label>
                </div>

                <div>
                    <input
                        type="text"
                        name="destination"
                        id="destination"
                        value={formData.destination}
                        onChange={handleChange}
                    />
                    <label htmlFor="destination">Destination</label>
                </div>

                <div>
                    <input
                        type="text"
                        name="reason"
                        id="reason"
                        value={formData.reason}
                        onChange={handleChange}
                    />
                    <label htmlFor="reason">Reason for contact</label>
                </div>
            </div>


            <div className='text-area-div' >
                <textarea
                    // type="text"
                    name="message"
                    id="message"
                    value={formData.message}
                    style={{

                    }}
                    rows={40}
                    cols={50}
                // onChange={handleChange}
                />
                <label htmlFor="message">How can we help you?</label>
            </div>
            <div style={{ textAlign: "center", marginTop: "1em" }}>
                <button className='submit-btn' type="submit">Submit</button>
            </div>
        </>


    )


    return (
        <main>

            <form
                onSubmit={handleSubmit}
                className='form'
            // style={{ maxWidth: "100rem", margin: "auto" }}
            >
                {formTSX}
            </form >
        </main>
    );
}