import './styles/UserInput.css'

export default function UserInput({ instruction, setInstruction }) {
    const handleUpdateInstruction = (event) => { 
        setInstruction(event.target.value);
    }

    const handleSubmitInstruction = (event) => {
        event.preventDefault();
        console.log("Instruction submitted: ", instruction);
    }

    return (
        <div id="user-input-div"> 
            <p>Instruction: </p>

            <form onSubmit={handleSubmitInstruction}>
                <input
                    type="text"
                    value={instruction}
                    onChange={handleUpdateInstruction}
                    id="instruction-input"
                    placeholder="e.g. addi $t1, $zero, 0"
                />

                <button
                    id="submit-button"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}