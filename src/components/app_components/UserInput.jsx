import { useState } from 'react';
import '../../styles/user-input.css'
import { tokenizeInstruction } from '../../logic/parser/input-tokenizer';
import { parseInstruction } from '../../logic/parser/input-parser';

export default function UserInput({ instruction, setInstruction, output, setOutput }) {
    const handleUpdateInstruction = (event) => { 
        setInstruction(event.target.value);
    }

    const handleSubmitInstruction = (event) => {
        event.preventDefault();
        try {
            const tokens = tokenizeInstruction(instruction);
            const result = parseInstruction(tokens);
            setOutput(result);
        } catch (err) {
            console.error(err.message);
        }
    };

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
