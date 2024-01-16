import React from 'react'
import { Button, Stack, Checkbox } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FormatSizeIcon from '@mui/icons-material/FormatSize';

function UserSelect({handleColorChange, handleFontSizeChange, handleTemplateChange, handleAddDiv, handleFontStyleChange, handleBoldChange, selectedColor, selectedFontSize, selectedFontStyle, selectedTemplateColor, bold}) {
  return (
    <>
        <div>
            <Button variant="contained" endIcon={<AddCircleOutlineIcon sx={{height:"50px"}}/>} color="success" size="large" onClick={handleAddDiv}>
                Add Text Field
            </Button>
        </div>
        <div>
            <Stack direction={"row"}>
                <label htmlFor="colorPicker" className='form-label'><div>Select Text Field Color:</div></label> <br />
                <ColorLensIcon />
            </Stack>
            <select id="colorPicker" className='form-control' value={selectedColor} style={{backgroundColor:`${selectedColor}`}} onChange={handleColorChange}>
                <option value="yellow" style={{backgroundColor:"yellow"}}>Yellow</option>
                <option value="lightyellow" style={{backgroundColor:"lightyellow"}}>Light-Yellow</option>
                <option value="blue" style={{backgroundColor:"blue"}}>Blue</option>
                <option value="lightblue" style={{backgroundColor:"lightblue"}}>Light-Blue</option>
                <option value="green" style={{backgroundColor:"green"}}>Green</option>
                <option value="lightgreen" style={{backgroundColor:"lightgreen"}}>Light-Green</option>
                <option value="pink" style={{backgroundColor:"pink"}}>Pink</option>
            </select>
        </div>
        <div>
            <Stack direction={"row"}>
            <label htmlFor="templatePicker" className='form-label'><div>Select Template Color:</div></label> <br />
                <FormatColorFillIcon />
            </Stack>
            <select id="templatePicker" className='form-control' style={{backgroundColor:`${selectedTemplateColor}`}} value={selectedTemplateColor} onChange={handleTemplateChange}>
            <option value="yellow" style={{backgroundColor:"yellow"}}>Yellow</option>
                <option value="lightyellow" style={{backgroundColor:"lightyellow"}}>Light-Yellow</option>
                <option value="blue" style={{backgroundColor:"blue"}}>Blue</option>
                <option value="lightblue" style={{backgroundColor:"lightblue"}}>Light-Blue</option>
                <option value="green" style={{backgroundColor:"green"}}>Green</option>
                <option value="lightgreen" style={{backgroundColor:"lightgreen"}}>Light-Green</option>
                <option value="pink" style={{backgroundColor:"pink"}}>Pink</option>
            </select>  
        </div> 
        <div>
            <Stack direction={"row"}>
            <label htmlFor="fontStylePicker" className='form-label'><div>Select Font Style:</div></label> <br />
                <FontDownloadIcon />
            </Stack>
            <select id="fontStylePicker" className='form-control' value={selectedFontStyle} onChange={handleFontStyleChange}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
            </select>
        </div>
        <div>
            <Stack direction={"row"}>
            <label htmlFor="fontSizePicker" className='form-label'>Select Font Size:</label> <br />
                <FormatSizeIcon />
            </Stack>
            <select id="fontSizePicker" className='form-control' value={selectedFontSize} onChange={handleFontSizeChange}>
                <option value="16px">16px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
                <option value="30px">30px</option>
                <option value="34px">34px</option>
                <option value="40px">40px</option>
            </select>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <label className='form-label mt-2'>Bold</label>
        <Checkbox size="large" onChange={handleBoldChange} value={bold}/>
        </div>
    </>
  )
}

export default UserSelect;
