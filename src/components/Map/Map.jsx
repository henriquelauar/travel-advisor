import React from "react";
import GoogleMapReact from 'google-map-react'
// import { Paper, Typography, useMediaQuey } from '@mui/material'
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
// import Rating from '@mui/lab'
import styles from '../Map/styles.module.css'

const Map = () => {
    // const isMobile = useMediaQuey('(min-width:600px')
    const coordinates = { lat:41.40338, lng: 2.17403}

    return (
        <div className={styles.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyDxYxAMv3rHRAoDkJPU_VWlgua218acOgE' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={''}
                // onChange={''}
                // onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;