import React from 'react';
import classNames from 'classnames';

const VehicleColorsItem = ({
  colorData,
  isSelected,
  handleSelectColor
}) => {
  const classes = classNames(
    'color',
    { selected: isSelected },
    { dark: colorData.isDark }
  );

  const renderSelectedCheck = () => {
    return (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.76 100">
        <polygon points="114.8,13.3 101.5,0 38.1,71.3 12.5,39.9 0,53.9 37.6,100" aria-hidden="true"></polygon>
      </svg>
    )
  };

  return (
    <div className={classes}
      style={{ backgroundColor: colorData.colorCode }}
      onClick={() => handleSelectColor(colorData)}>
      {isSelected && renderSelectedCheck()}
    </div>
  );
};

export default VehicleColorsItem;
