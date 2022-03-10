import React from "react";
import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuey } from '@mui/material'
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
// import Rating from '@mui/lab'
import styles from "../Map/styles.module.css";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  // const isMobile = useMediaQuey('(min-width:600px')

  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxYxAMv3rHRAoDkJPU_VWlgua218acOgE" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng})
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
