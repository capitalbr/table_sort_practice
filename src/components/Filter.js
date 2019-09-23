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

    onChange(e, type){
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
        let nameBox = "";
        let ageBox = "";
        if (filterType === "name"){
            nameBox = true;
            ageBox = false;
        } else if (filterType === "age"){
            nameBox = false;
            ageBox = true;
        }
        return (
        <div className="checkboxes">
            <div>
                <Checkbox 
                    checked={nameBox}
                    className="filter-by-name"
                    onChange={e => this.onChange(e, "name")}
                    />
                <label>Name</label>
                <Checkbox 
                    checked={ageBox}
                    className="filter-by-age"
                    onChange={e => this.onChange(e, "age")}
                    />
                <label>Age</label>
                </div>
            <RecordTable filter={filterType}></RecordTable>
        </div>
        );
    }
}

export default Filter;