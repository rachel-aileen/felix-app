import { Grid } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (

        <div className='navbar'>

            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"

            >

                <Grid item xs={6}> Logo
                </Grid>


                <Grid className='navLinks'
                    item xs={6}

                >
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </Grid>


            </Grid>


        </div>
    )
}
