import React from 'react';
import { useState } from 'react';
import './DataDetails.css';
import Icon from '../../images/peopleicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const DataDetails = (props) => {
    const newData = props.newData;
    const { Image, VehicleNames, TicketPrice, Seat } = newData;
    return (
        <div className="p-3 bg-light">
            <div className="pick">
                <h2>Dhaka</h2>
                <h2 className="mt-5">Gazipur</h2>
            </div>
            <div className="data-details d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <img className="img-vehicle" src={Image} alt="" />
                    <p className="ml-4">{VehicleNames}</p>
                </div>
                <div className="d-flex">
                    <img className="icon-img" src={Icon} alt="" />
                    <p className="">{Seat}</p>
                </div>
                <div className="">
                    <p className="text-dark"><FontAwesomeIcon icon={faDollarSign} />{TicketPrice}</p>
                </div>
            </div>
            <div className="data-details d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <img className="img-vehicle" src={Image} alt="" />
                    <p className="ml-4">{VehicleNames}</p>
                </div>
                <div className="d-flex">
                    <img className="icon-img" src={Icon} alt="" />
                    <p className="">{Seat}</p>
                </div>
                <div className="">
                    <p className="text-dark"><FontAwesomeIcon icon={faDollarSign} />{TicketPrice}</p>
                </div>
            </div>
            <div className="data-details d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <img className="img-vehicle" src={Image} alt="" />
                    <p className="ml-4">{VehicleNames}</p>
                </div>
                <div className="d-flex">
                    <img className="icon-img" src={Icon} alt="" />
                    <p className="">{Seat}</p>
                </div>
                <div className="">
                    <p className="text-dark"><FontAwesomeIcon icon={faDollarSign} />{TicketPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default DataDetails;