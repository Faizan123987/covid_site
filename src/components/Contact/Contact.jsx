import React, { useEffect, useState } from 'react';
import {Container, Table, Col} from 'react-bootstrap';
import axios from 'axios';

const Contact = function({ name }) {

    const [contact, setContact] = useState([]);
    useEffect(() => {
        axios.get('https://api.rootnet.in/covid19-in/contacts')
        .then(({data : jsonData}) => {
            setContact(jsonData.data.contacts.regional);
            console.log(contact);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
            <div>
            <center><h2>Contact & helpline information</h2></center>
            { contact!=null 
            ? <Table striped bordered hover size='sm'>
                <thead>
                <th>
                    State Name
                </th>
                <th>
                    Helpline Number
                </th>
                </thead>
                <tbody>
                    {contact.map(data => {
                        return(
                            <tr key={data.loc}>
                                <td >{data.loc}</td>
                                <td >{data.number}</td>
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