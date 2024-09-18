import React from "react";
import { ClickButton, InputField,KeyDownComponent} from "./Events";
function Footer() {
    return (
        <>
            <footer>
                <ClickButton />
                <InputField />
                <KeyDownComponent/>
                <h1>Aqui um footer</h1>
            </footer>
        </>
    )
}

export default Footer