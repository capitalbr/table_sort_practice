import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor() {
        super();
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    tableFiller(name, dob){
        return(
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{dob}</TableCell>
            </TableRow>
        )
    }

    filterType(){
        switch (this.props.filter){
            case "name":
                return "name";
            case "age":
                return "age";
            default:
                return "name";
        }
    }

    render() {
      
        let people = this.people;
        let type = this.filterType();
        if (type === "name"){
            people = people.sort(function (a, b) {
                if (a.name < b.name){
                    return -1;
                } else {
                    return 1;
                }
            });
        } else if (type === "age"){
            people = people.sort(function (a, b) {
                return (
                    parseInt(a.dob.split("").slice(6, 10).join("")) - 
                    parseInt(b.dob.split("").slice(6, 10).join(""))
                )
            });
        }
        people = people.map(person => {
            return this.tableFiller(person.name, person.dob);
        })
       
        
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {people}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
