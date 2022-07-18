import HsReact, {useState} from "../hs-react";
import Form from "./sample/Form";

const AboutPage = () => {

    const [show, setShow] = useState(false);

    return (
        HsReact.createElement(
            'div',
            {
                className: 'app',
            },
            HsReact.createElement(
                'button',
                {
                    onClick: () => setShow(!show),
                },
                show ? "Hide form" : "Show form",
            ),
            show && HsReact.createElement(Form, {})
        )
    );
}

export default AboutPage;