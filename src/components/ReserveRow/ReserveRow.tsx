import "./ReserveRow.css"
import { Select } from "../../component_test/select/Select"
import { useEffect, useState } from "react"
import { data } from "../../components/data"
import { Button } from "../../component_test/Button/Button";
import { DatePickerComponent } from "../../component_test/select/DatePicker";

interface IOption {
    label: string;
    value: string;
}

interface ISelectedOptions {
    option: string,
    room: string,
    guest: string,
}

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

interface IReserve {
    hotelName?: string,
}

export const ReserveRow = ({
    hotelName
}: IReserve) => {

    const [selectedOption, setSelectedOption] = useState<ISelectedOptions>({
        option: hotelName || "",
        room: "1 Room",
        guest: "2 Guests",
    });

    const [hotelOption, setHotelOption] = useState<IOption[]>([])


    useEffect(() => {
        const options = data.map((item) => ({
            label: item.name,
            value: item.name,
        })).sort((a, b) => a.value.localeCompare(b.value));
        setHotelOption(options);
    }, []);


    const handleSelectChange = (value: string, key: string) => {
        setSelectedOption(prev => ({
            ...prev,
            [key]: value
        }))
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <section className="reservation-row">
            <div className="row">

                <h3>Make a Reservation</h3>


                <form
                    className="flex-container"
                    onSubmit={handleSubmit}
                >
                    <div className="flex-item flex-item-1">
                        <Select
                            keySelect="option"
                            value={hotelOption}
                            selected={selectedOption.option}
                            handleSelectChange={handleSelectChange}
                            disabled={hotelName ? true : false}
                        />
                        <div className="flex-row">
                            <div className="flex-item flex-item-2">
                                <Select
                                    key={"key1"}
                                    keySelect="room"
                                    value={roomOptions}
                                    selected={selectedOption.room}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>

                            <div className="flex-item flex-item-3">
                                <Select
                                    key={"key2"}
                                    keySelect="guest"
                                    value={guestOptions}
                                    selected={selectedOption.guest}
                                    handleSelectChange={handleSelectChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-item flex-item-4">
                        <DatePickerComponent />
                    </div>
                    <div className="flex-item flex-item-5">
                        <Button
                            className="submit-btn light long"
                            children={"Reserve"}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}