import "./ReserveRow.css"
import { Select } from "../../component_test/select/Select"
import { useState } from "react"


interface IOption {
    label: string;
    value: string;
}

interface ISelectedOptions {
    option: string,
    room: string,
    guest: string,
}


const options: IOption[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
];

const roomOptions: IOption[] = [
    { label: "1 Room", value: "1 Room" },
    { label: "2 Rooms", value: "2 Rooms" },
    { label: "3 Rooms", value: "3 Rooms" },
];

const guestOptions: IOption[] = [
    { label: "1 Guest", value: "1 Guest" },
    { label: "2 Guests", value: "2 Guests" },
    { label: "3 Guests", value: "3 Guests" },
    { label: "4 Guests", value: "4 Guests" },
    { label: "5 Guests", value: "5 Guests" },
    { label: "6 Guests", value: "6 Guests" },
];

export const ReserveRow = () => {

    const [selectedOption, setSelectedOption] = useState<ISelectedOptions>({
        option: "",
        room: "1 Room",
        guest: "2 Guests",
    });


    const handleSelectChange = (value: string, key: string) => {
        setSelectedOption(prev => ({
            ...prev,
            [key]: value
        }))
    };

    return (
        <section className="reservation-row">
            <div className="row">

                <h3>Make a Reservation</h3>


                <div className="flex-container">
                    <div className="flex-item flex-item-1">
                        <Select
                            keySelect="option"
                            value={options}
                            selected={selectedOption.option}
                            handleSelectChange={handleSelectChange}
                        />
                        <div className="flex-row">
                            <div className="flex-item flex-item-2">
                                <Select
                                    key={"wat"}
                                    keySelect="room"
                                    value={roomOptions}
                                    selected={selectedOption.room}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>

                            <div className="flex-item flex-item-3">
                                <Select
                                    key={"diff"}
                                    keySelect="guest"
                                    value={guestOptions}
                                    selected={selectedOption.guest}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-item flex-item-4">Element 4</div>
                    <div className="flex-item flex-item-5">Element 5</div>
                </div>


            </div>
        </section>

    )
}