import React, { useState, useEffect } from 'react';

const ColorList = ({ colors, updateColor, color }) => {
  const [activeColor, setActiveColor] = useState(color);

  useEffect(() => {
    setActiveColor(color);
  }, [color]);

  const handleColorClick = (color) => {
    setActiveColor(color);
    updateColor(color);
  };

  return (
    <div>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full cursor-pointer ${color === activeColor ? 'border-2 border-black' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorList;