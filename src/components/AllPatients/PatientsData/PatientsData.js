import React from 'react';

const PatientsData = ({patients}) => {
    return (
        <div className="mt-5 pl-4">
            <h6 className="h6-header">All Patients</h6>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Gender</th>
                        <th className="text-secondary" scope="col">Age</th>
                        <th className="text-secondary" scope="col">Weight</th>
                        <th className="text-secondary" scope="col">Contact</th>
                        <th className="text-secondary" scope="col">Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient, index) => 
                            <tr>
                                <td>{index + 1}</td>
                                <td>{patient.name}</td>
                                <td> {patient.gender} </td>
                                <td>{patient.age}</td>
                                <td>{patient.weight}kg</td>
                                <td>{patient.phone}</td>
                                <td>{patient.service}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PatientsData;