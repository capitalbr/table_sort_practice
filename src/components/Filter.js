import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import RecordTable from './RecordTable';

class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter: undefined
        }
    }

    handleChange(e, type){
        e.preventDefault();
        this.setState({
            filter: type
        })
    }

    filterSet(){
        switch (this.state.filter){
            case "name":
                return "name";
            case "age":
                return "age";
            default: 
                return undefined;
        }
    }

    render() {
        let filterType = this.filterSet();
        return (
        <div className="checkboxes">
            <div>
                <Checkbox 
                    className="filter-by-name"
                    onChange={e => this.handleChange(e, "name")}
                    />
                <label>Name</label>
                <Checkbox 
                    className="filter-by-age"
                    onChange={e => this.handleChange(e, "age")}
                    />
                <label>Age</label>
                </div>
            <RecordTable filter={filterType}></RecordTable>
        </div>
        );
    }
}

export default Filter;