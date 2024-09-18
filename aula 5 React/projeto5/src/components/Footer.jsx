import React from "react";
import { ClickButton, InputField,KeyDownComponent, FocusBlurComponent, HoverComponent} from "./Events";
function Footer() {
    return (
        <>
            <footer>
                <ClickButton />
                <InputField />
                <KeyDownComponent/>
                <FocusBlurComponent/>
                <HoverComponent/>
                <h1>Aqui um footer</h1>
            </footer>
        </>
    )
}

export default Footer