import { Grid } from '@mui/material'
import React from 'react'

export default function Hero() {
    return (
        <div className='hero'>


            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={6}
                >
                    <img className='row-img' src="https://images.unsplash.com/photo-1519556883520-8a146529e76f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </Grid>

                <Grid item xs={6}

                >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci fuga, unde placeat officiis saepe enim tempora! Distinctio odit omnis ut.</p>
                </Grid>

            </Grid>




        </div>
    )
}
