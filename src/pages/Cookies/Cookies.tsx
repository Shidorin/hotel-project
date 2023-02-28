import { useEffect, useState } from "react";
import "./Cookies.css"

export const Cookies = () => {
    const [consent, setConsent] = useState<boolean>(false);

    useEffect(() => {
        const consentCookie = localStorage.getItem('cookie');
        if (consentCookie) {
            setConsent(true);
        }
      }, []);

    const setConsentForm = () => {
        setConsent(true);
        localStorage.setItem("cookie", "true");
    }

    return (
        <form className="cookie-bar" style={consent ? { display: "none" } : {}}>
            <p>By continuing to browse, you accept the use of third-party cookies intended to offer you services adapted to your browsing and social networks.</p>
            <button type="button" onClick={() => setConsentForm()}>Accept</button>
        </form>
    );
}