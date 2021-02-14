import React, { useEffect, useState } from 'react';
// import {StyledNotification} from './StyledNotification';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const Contact = function({ name }) {

    const [hospital, setHospital] = useState([]);
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
        .then(({data : jsonData}) => {
            setHospital(jsonData.data.regional);
            console.log(hospital);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
            <div>
            <center><h2>Hospitals and Beds Information</h2></center>
            { hospital!=null 
            ? <Table striped bordered hover size='sm'>
                <thead>
                <th>
                    State Name
                </th>
                <th>
                    Rural Hospitals
                </th>
                <th>
                    Rural Beds
                </th>
                <th>
                    Urban Hospitals
                </th>
                <th>
                    Urban Beds
                </th>
                <th>
                    Total Hospitals
                </th>
                <th>
                    Total Beds
                </th>
                </thead>
                <tbody>
                    {hospital.map(data => {
                        return(
                            <tr key={data.regional}>
                                <td >{data.state}</td>
                                <td >{data.ruralHospitals}</td>
                                <td>{data.ruralBeds}</td>
                                <td>{data.urbanHospitals}</td>
                                <td>{data.urbanBeds}</td>
                                <td>{data.totalHospitals}</td>
                                <td>{data.totalBeds}</td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            : null}
            </div>
    );
};

export default Contact;