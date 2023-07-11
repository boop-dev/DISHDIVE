import { Grid, Paper, Rating, Typography } from '@mui/material';
import './App.css'

export default function CustomerReviewCard ({ props }){
    return(
        <Grid item xs={12} sm={4} >
            <Paper elevation={0} sx={{
                padding: '5%',
                textAlign: 'left',
                height: '90%',
                width: 'auto',
                borderRadius: '5%',
                backgroundColor: '#F2F3F7',
            }}>
                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontSize: '120%',
                    fontWeight:'bold',
                }}>
                    {props.name}
                </Typography>

                <Rating readOnly defaultValue={props.rating} precision={0.5} sx={{
                    paddingBottom: '1.5vh',
                }} />

                <Typography sx={{
                    paddingY: '2%',
                    fontFamily: 'Raleway',
                    fontWeight: 'bold'
                    }}>
                    {props.title}
                </Typography>

                <Typography sx={{
                    fontFamily: 'Raleway',
                    fontSize: '90%',
                }}>
                    {props.description}
                </Typography>

            </Paper>
        </Grid>
    )
}