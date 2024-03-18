import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
    x: 0,
    y: 0
};

export default function Canvas() {
    const [shape, setShape] = useState({
        color: 'orange',
        position: {...initialPosition} // Clone the initial position to ensure it's a separate object
    });

    function handleMove(dx, dy) {
        // Update position in an immutable manner
        setShape(prevShape => ({
            ...prevShape,
            position: {
                x: prevShape.position.x + dx,
                y: prevShape.position.y + dy
            }
        }));
    }

    function handleColorChange(e) {
        setShape(prevShape => ({
            ...prevShape,
            color: e.target.value
        }));
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background
                position={initialPosition} // Ensure this is always pointing to the static initial position
            />
            <Box
                color={shape.color}
                position={shape.position} // This position is dynamic and changes with drag actions
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}


// 15-updating-objects-in-state - Challenge 2 of 3: Find and fix the mutation