import React from 'react'
import { Grid, Stack } from '@mui/material'

export default function BottomSection() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            spacing={2}
        >

            <Grid item xs={6}>
                <img className='cat-img' src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Grid>

            <Grid item xs={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempore in quis aut voluptas, sunt cupiditate a id eos, accusantium commodi, explicabo dolor. Quisquam nemo veritatis dolorem maiores nostrum sint!</p>
            </Grid>


        </Grid>
    )
}
