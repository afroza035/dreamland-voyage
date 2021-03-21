import React, { useEffect, useState } from 'react';
import './Home.css';
import BackgroundImage from '../../images/Bg.png'
import vehicle from "../../../src/data/data.json";
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
    const [vehicleName, setVehicleName] = useState([]);
    console.log();
    useEffect(() => {
        setVehicleName(vehicle);
    })
    return (
        <div style={{ backgroundImage: `url(${BackgroundImage})` }} className="background-img d-flex justify-content-center">
            <div className="container row ">
                {
                    vehicleName.map(vehicleDetails => <VehicleDetails vehicleDetails={vehicleDetails}></VehicleDetails>)
                }
            </div>
        </div>
    );
};

export default Home;