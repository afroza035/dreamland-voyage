import React from 'react';

const GoogleMap = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20323.513827471877!2d90.40637325540507!3d23.996450521561155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1616264835745!5m2!1sen!2sbd"

                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0, borderRadius: '5px' }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
    );
};

export default GoogleMap;