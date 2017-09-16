import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';


const Input = () => {
  return (
    <div>
      <AutoComplete 
          dataSource = {this.props.dataSource}
          name = 'position'
          hintText = {this.props.hintText}
          fullWidth = {true}
      />
    </div>
  );
}

export default Input
