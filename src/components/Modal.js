import { Typography } from "@mui/material";
import  ReactDOM  from "react-dom";
let MODAL_STYLE = {
    position: "fixed",
    top: "45%", 
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "25px",
    zIndex: "1000",
    width: "45vw",
    fontFamily: 'Varela Round',
    boxShadow: "0px 3px 4px 5px rgb(36, 34, 34)",
    borderRadius: "10px",
    overflowY: "auto",
    maxHeight: "80vh", 
}

let OVERLAY_STYLE = {
    position: "fixed",
    top:0,
    left:0,
    bottom:0,
    right:0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "900"
}

let Modal = ({open,children,onClose}) => {
    if(!open) return null;
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} onClick={onClose}/>
            <div style={MODAL_STYLE}>
                <Typography variant="h3" className="mb-4" textAlign={"center"} textTransform={"capitalize"}>Instructions</Typography>
                <Typography variant="h5">1.) Click Add Text Field button to add new text field  </Typography>
                <Typography variant="h5">2.) Select features : </Typography>
                <ul>
                    <li><Typography variant="h6">Text Field Color</Typography></li>
                    <li><Typography variant="h6">Template Color</Typography></li>
                    <li><Typography variant="h6">Font-Style</Typography></li>
                    <li><Typography variant="h6">Font-Size</Typography></li>
                    <li><Typography variant="h6">Font-Bold</Typography></li>
                </ul>
                <Typography variant="h6"> From Right screen section. </Typography>
                <Typography variant="h5">2.) User can drag text field. </Typography>
                <Typography variant="h5">3.) Double click text field to write text within text field.</Typography>
                <Typography variant="h5">3.) Double click text field and then press delete button to <b>delete</b> the text field.</Typography>

            </div>
        </>,
        document.getElementById("portal")
    )
}

export default Modal;