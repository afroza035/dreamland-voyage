import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Fakedata from '../../data/data.json'
import DataDetails from '../DataDetails/DataDetails';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    const [displayHeight, setDisplayHeight] = useState(false);
    const {dataId} = useParams();
    const newData = Fakedata.find(data=> data.Id == dataId)
    console.log(newData);
    return (
       <div className="d-flex justify-content-center">
            <div className="container row">
            <div className="col-md-5">
                <DataDetails newData={newData}></DataDetails>
            </div>
            <div className="col-md-7">
                <GoogleMap></GoogleMap>
            </div>
        </div>
       </div>
    );
};

export default Destination;