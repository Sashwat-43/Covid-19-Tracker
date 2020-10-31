import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import "./InfoBox.css";

function InfoBox({ title,cases,isRed,isGrey, active,total ,...props }) {
    return(
        <Card 
            className={`infoBox ${active && "infoBox--selected"}
             ${isRed && "infoBox--red"}
             ${isGrey && "infoBox--grey"}`
             } 
             onClick={props.onClick}>
            <CardContent>
                <Typography  className="infoBox_title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox_cases 
                    ${!isRed && !isGrey && "infoBox__cases--green"}
                    ${!isRed && isGrey && "infoBox__recovered--grey"}`
                    }>{cases}</h2>
                <Typography className="infoBox_total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
