import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';


export class Input extends React.Component {
  render() {
    console.log(this.props.dataSource);

    return (
      <div>
        <AutoComplete 
            dataSource={this.props.dataSource}
            name='position'
            hintText={this.props.hintText}
        />
      </div>
    );
  }
}
