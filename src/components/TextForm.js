import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text.trim() !== "") {
            let newText = text.toUpperCase().trim();
            setText(newText);
            props.showAlert("Text updated to Upper Case", "success");
        }
    }
    const handleLowClick = () => {
        if (text.trim() !== "") {
            let newText = text.toLowerCase().trim();
            setText(newText);
            props.showAlert("Text updated to Lower Case", "success")
        }

    }
    const handleCopyClick = () => {
        if (text.trim() !== "") {
            let text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text has been copied in clipboard", "success");
        }
    }
    const handleClearText = () => {
        if (text.trim() !== "") {
            let newText = "";
            setText(newText);
            props.showAlert("Text has been cleared", "success");
        }
    }
    const handleRevTextClick = () => {
        if (text.trim() !== "") {
            let formattedText = text.split("").reverse().join("");
            let newText = formattedText.split(" ")
                .map(word => {
                    const textVal = word.split("").join("");
                    return textVal.charAt(0).toUpperCase() + textVal.slice(1).toLowerCase();
                }).join(" ");
            setText(newText);
            props.showAlert("Text has been reversed", "success");
        }
    }
    const handleRevWordClick = () => {
        if (text.trim() !== "") {
            let newText = text.split(" ")
                .map(word => {
                    const reversed = word.split("").reverse().join("");
                    return reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
                }).join(" ");
            setText(newText);
            props.showAlert("Words in text has been reversed", "success");
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    let trimmedText = text.trim();
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Text Here" style={{ backgroundColor: props.mode === 'dark' ? '#0d5767' : '#ffffff', color: props.mode === 'dark' ? '#ffffff' : 'black' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleRevTextClick}>Reverse Complete Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleRevWordClick}>Reverse Words</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{trimmedText !== "" ? trimmedText.split(/\s+/).length : 0} words and {trimmedText !== "" ? text.length : 0} characters</p>
                <p>{0.008 * (trimmedText !== "" ? trimmedText.split(/\s+/).length : 0)} Minutes read</p>
                <h2>Preview</h2>
                <h6>{trimmedText !== "" ? trimmedText : "No text to preview"}</h6>
            </div>
        </>
    )
}
