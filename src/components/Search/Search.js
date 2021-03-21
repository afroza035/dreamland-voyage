import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';


const Search = () => {
    const { dataId } = useParams();
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="">
            <div className="row container d-flex justify-content-center">
            <div className="col-md-4 d-flex justify-content-center">
                <form onSubmit={handleOnSubmit}>
                    <p>Pick from</p>
                    <input type="text" defaultValue="Dhaka" />
                    <br />
                    <p className='mt-3'>Pick to</p>
                    <input type="text" defaultValue="Gazipur" />
                    <br />
                    <Link to={`/destination/${dataId}`}><input type="submit" value="search" /></Link>
                </form>
            </div>
            <div className="col-md-7">
                <GoogleMap></GoogleMap>
            </div>
        </div>
        </div>
    );
};

export default Search;