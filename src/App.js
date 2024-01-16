import React, { useRef, useState } from 'react';
import './App.css';
import DraggableDiv from './components/DraggableDiv';
import UserSelect from './components/UserSelect';
import { Box, Paper, Stack, Typography, Button } from '@mui/material'
import Modal from './components/Modal';

function App() {
    let [open, setModal] = useState(false)
    const [divCount, setDivCount] = useState(0);
    const [divs, setDivs] = useState([]);
    const containerRef = useRef(null)
    const [selectedColor, setSelectedColor] = useState('lightgreen');
    const [selectedTemplateColor, setTemplateColor] = useState('lightyellow');
    const [selectedFontStyle, setSelectedFontStyle] = useState('normal');
    const [selectedFontSize, setSelectedFontSize] = useState('16px');
    const [bold, setBold] = useState(false)

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleTemplateChange = (e) => {
        setTemplateColor(e.target.value);
    };

    const handleFontStyleChange = (e) => {
        setSelectedFontStyle(e.target.value);
    };

    const handleFontSizeChange = (e) => {
        setSelectedFontSize(e.target.value);
    };

    const handleBoldChange = (e) => {
        console.log(e)
        setBold(e.target.checked);
    };

    const handleAddDiv = () => {
        const newDivs = [
            ...divs,
            {
                id: divCount,
                text: `Div ${divCount}`,
                color: selectedColor,
                fontStyle: selectedFontStyle,
                fontSize: selectedFontSize,
                bold: bold
            },
        ];

        setDivs(newDivs);
        setDivCount(divCount + 1);
    };

    const removeDiv = (id) => {
        console.log(id)
        setDivs((prevDivs) => prevDivs.filter((div) => div.id !== id));
    };
    console.log(bold)
    return (
        <Stack direction="row" sx={{ display: "flex", flexDirection: { sm: "column", md: "row" } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Button variant='contained' size='large' color="warning" className='mt-5' onClick={() => setModal(true)}>How to use</Button>
                <Modal open={open} onClose={() => setModal(false)}>
                    <h1>Hello</h1>
                </Modal>
                <div style={{height:"100%", display:"flex", alignItems:"center"}}>
                    <Typography variant="h3" sx={{ fontFamily: 'monospace', mt: 2 }} color="initial" textAlign="center">
                        Editing Screen
                    </Typography>
                </div>
            </Box>
            <Paper elevation={3} sx={{ height: "100vh", width: { sm: "100vw", md: "70vw" }, backgroundColor: "#E8ECEF;", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Paper elevation={5} ref={containerRef} sx={{ height: "85vh", width: "45vw", backgroundColor: `${selectedTemplateColor}`, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {divs.map((div, index) => (
                        <DraggableDiv containerRef={containerRef}
                            key={div.id}
                            id={div.id}
                            initialText={div.text}
                            top={div.top}
                            left={div.left}
                            backgroundColor={div.color}
                            fontStyle={div.fontStyle}
                            fontSize={div.fontSize}
                            bold={div.bold}
                            onRemove={removeDiv}
                            isLastAdded={index === divs.length - 1}
                        />
                    ))}
                </Paper>
            </Paper>
            <div className='user-select'>
                <UserSelect
                    handleColorChange={handleColorChange}
                    handleFontStyleChange={handleFontStyleChange}
                    handleFontSizeChange={handleFontSizeChange}
                    handleAddDiv={handleAddDiv}
                    handleTemplateChange={handleTemplateChange}
                    handleBoldChange={handleBoldChange}
                    selectedColor={selectedColor}
                    selectedFontSize={selectedFontSize}
                    selectedFontStyle={selectedFontStyle}
                    selectedTemplateColor={selectedTemplateColor}
                    bold={bold}
                />
            </div>
        </Stack>
    )
}

export default App;
