import './Styles/UserInput.css'
import { useState } from "react"

export default function UserInput() {
    const [instruction, setInstruction] = useState("");
    const handleUpdateInstruction = (event) => setInstruction(event.target.value);
    const handleSubmitInstruction = (event) => {
        event.preventDefault();
        console.log("Instruction submitted: ", instruction);
    }

    return (
        <div id="user-input-div"> 
            <p style={{ color: 'black' }}>Instruction: </p>
            <form onSubmit={handleSubmitInstruction}>
                <input
                    type="text"
                    value={instruction}
                    onChange={handleUpdateInstruction}
                    id="instruction-input"
                    placeholder="e.g. addi $t1, $zero, 0"
                />
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}