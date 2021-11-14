import React from 'react';
import classNames from 'classnames';
function VehicleColorsItem (props) {

  const renderSVG  = () => {
    if (props.currentColor === props.index) {
      return (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.76 100">
          <polygon points="114.8,13.3 101.5,0 38.1,71.3 12.5,39.9 0,53.9 37.6,100" aria-hidden="true"></polygon>
        </svg>
      )
    }
  };

  const classes = classNames(
    'color',
    {selected: props.currentColor === props.index},
    {dark: props.color.isDark}
  );

  return (
    <div className={classes}  
      onClick={() => props.updateCurrentColor(props.index)} 
      style={{backgroundColor: props.color.colorCode}}>
      {renderSVG()}
    </div>
  );
    
}

export default VehicleColorsItem;