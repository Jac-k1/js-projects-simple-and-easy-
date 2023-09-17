import React, { useRef, useEffect } from 'react';

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.fillStyle = 'salmon';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        context.strokeStyle = 'black';
        context.lineCap = 'round';
        context.lineWidth = 5;

        let isDrawing = false;

        const start = (e) => {
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            context.beginPath();
            const [x, y] = [e.clientX - rect.left, e.clientY - rect.top];
            context.moveTo(x, y);
        }

        const draw = (e) => {
            if (isDrawing) {
                const rect = canvas.getBoundingClientRect();
                const [x, y ] = [e.clientX - rect.left, e.clientY - rect.top];
                context.lineTo(x, y);
                context.stroke();
            }
        }

        const stop = () => {
            isDrawing = false;
        }

        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stop);
        canvas.addEventListener('mouseout', stop);

        return () => {

            canvas.removeEventListener('mousedown', start);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stop);
            canvas.removeEventListener('mouseout', stop);

        }

    }, []);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        canvas.fillStyle = 'salmon';
        const prevStyle = context.fillStyle;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = prevStyle;
    }

    return (
        <div className="canvas">
            <h1>Canvas</h1>
            <canvas ref={canvasRef} width={500} height={500} style={{border:'1px solid black'}}/>
            <br></br>
            <button onClick={() => clearCanvas()}>Clear Canvas</button>
        </div>
    )
}

export default Canvas;