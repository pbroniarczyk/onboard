import React from 'react';

// Components
import { BoardHeader } from '../BoardHeader';
import { Input } from './components/Input';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

export class Step2 extends React.Component {
    render() {
        return(
            <div className="step step2">
                <BoardHeader title={'Warunki współpracy'} subtitle={'Zdecyduj, ile chcesz zarabiasz i określ warunki swojego zatrudnienia.'} />
            </div>
        )
    }
}