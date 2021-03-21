import React, { useState } from 'react';
import "./VehicleDetails.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

const VehicleDetails = (props) => {
    const vehicleDetails = props.vehicleDetails;
    const { Image, VehicleNames, Id } = vehicleDetails;
    return (
        <Link to={`/search/${Id}`} className="vehicleStyle col-md-3">
            <div className="card justify-content-center mt-5 text-center">
                <img src={Image} className="card-img-top img-style" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{VehicleNames}</h5>
                </div>
            </div>
        </Link>
    );
};

export default VehicleDetails;