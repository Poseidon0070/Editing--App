import React, { useRef, useState } from 'react';
import { Paper, Input} from '@mui/material';
import './DraggableDiv.css'

const DraggableDiv = ({onRemove, id, containerRef, isLastAdded, backgroundColor, fontStyle, fontSize, bold}) => {
    console.log(fontStyle)
    const draggableRef = useRef(null);
    const [isEditing, setIsEditing] = useState(isLastAdded);
    const [text, setText] = useState('');

    const handleMouseDown = (e) => {
        const offsetX = e.clientX - draggableRef.current.getBoundingClientRect().left;
        const offsetY = e.clientY - draggableRef.current.getBoundingClientRect().top;

        const handleMouseMove = (e) => {
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;
            x = Math.min(x, containerRef.current.getBoundingClientRect().right - draggableRef.current.getBoundingClientRect().width)
            x = Math.max(x, containerRef.current.getBoundingClientRect().left)
            y = Math.min(y, containerRef.current.getBoundingClientRect().bottom - draggableRef.current.getBoundingClientRect().height)
            y = Math.max(y, containerRef.current.getBoundingClientRect().top)
            draggableRef.current.style.left = `${x}px`;
            draggableRef.current.style.top = `${y}px`;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }else if (e.key === 'Delete') {
            onRemove(id);
        }
    };

    console.log(fontStyle)
    return (
        <Paper
            ref={draggableRef}
            className="draggable-div"
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            autoFocus={isLastAdded}
            style={{backgroundColor:backgroundColor}}
        >
            <div style={{fontStyle:fontStyle, fontSize:fontSize}} className={`${bold ? 'fw-bold' : ''}`}>
                {isEditing ? (
                    <Input placeholder="Type in here…" variant="plain"
                        className={`${bold ? 'fw-bold' : ''}`}
                        type="text"
                        value={text}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        sx={{fontStyle:fontStyle, fontSize:fontSize, textDecoration:"none"}}
                    />
                ) : (
                    text
                )}
            </div>
        </Paper>
    );
};

export default DraggableDiv