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

        {stationData.hasParking ? 
        <span title="Parking Available"><LocalParkingRounded fontSize='large'/></span> : <span ></span>}

        {stationData.hasWiFi ? 
        <span title="Wifi Available"><WifiRounded fontSize='large'/></span> : <span></span>}

        {stationData.hasCarRental ? 
        <span title="Car Rental Available"><DirectionsCarRounded fontSize='large'/></span>: <span></span>}

        {stationData.hasLocalPublicTransport ? 
        <span title="Public Transport Available"><DirectionsBusRounded fontSize='large'/></span> : <span></span>}
        
        {stationData.hasBicycleParking ? 
        <span title="Bicycle Parking Available"><DirectionsBikeRounded fontSize='large'/></span> : <span></span>}
        </div>
    )
}
