import React from 'react'
import { Grid, Stack } from '@mui/material'

export default function TopSection() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            spacing={2}
        >

            <Grid item xs={6}>
                <img className='cat-img' src="https://images.unsplash.com/photo-1600357077527-930ccbaf7773?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Grid>

            <Grid item xs={6}>
                <img className='cat-img' src="https://images.unsplash.com/photo-1600357077527-930ccbaf7773?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </Grid>


        </Grid>
    )
}
