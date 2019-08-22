import React from "react";
// import { makeStyles } from "@material-ui/core";
import {
    LocalParkingRounded,
    WifiRounded,
    DirectionsCarRounded,
    DirectionsBusRounded,
    DirectionsBikeRounded
    } from '@material-ui/icons'

// const useStyles = makeStyles({
//     //
// });

export default function StationIcons(props){
    let stationData = props.data 
    // const classes = useStyles();
    return (
        <div>
            {
          // Need to add details on-hover
        }
        {stationData.hasParking ? 
        <LocalParkingRounded fontSize='large'/> : <span></span>}

        {stationData.hasWiFi ? 
        <WifiRounded fontSize='large'/> : <span></span>}

        {stationData.hasCarRental ? 
        <DirectionsCarRounded fontSize='large'/>: <span></span>}

        {stationData.hasLocalPublicTransport ? 
        <DirectionsBusRounded fontSize='large'/> : <span></span>}
        
        {stationData.hasBicycleParking ? 
        <DirectionsBikeRounded fontSize='large'/> : <span></span>}
        </div>
    )
}
