import React from 'react';

interface props {
    percentage: number, 
    color: string,
    name: string
}

const ProgressBar = ({ percentage, color, name }: props) => {
  return (
    <div style={{ position: "relative", width: '100%', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif', fontWeight: "700", textTransform: "uppercase" }}>
    <p style={{position: 'absolute', left: "30%", color: "white" }}>{name}</p>
      <div
        style={{
            width: `${percentage}%`,
            height: '20px',
            backgroundColor: color,
            borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default ProgressBar;
