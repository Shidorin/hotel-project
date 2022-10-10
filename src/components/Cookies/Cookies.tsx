import { useState } from "react";


export const Cookies = () => {
    const [consent, setConsent] = useState<boolean>(false)
    return (
        <form className="cookie-bar" style={consent ? { display: "none" } : {}}>
            <p>By continuing to browse, you accept the use of third-party cookies intended to offer you services adapted to your browsing and social networks.</p>
            <button type="button" onClick={() => setConsent(true)}>Accept</button>
        </form>
    );
}