import { Grid } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <div className='about'>

            <Grid container
                alignItems="center">

                <Grid item xs={6}>
                    <img className='cat-img' src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </Grid>

                <Grid item xs={6}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi numquam sed laboriosam et reiciendis ab, quisquam perspiciatis qui voluptatum molestias quod, magni alias laborum aliquid eum! Exercitationem dicta corrupti sapiente ipsum fugiat minus totam eaque quam veniam est nihil quaerat repudiandae natus, ad laudantium nisi debitis dolorum! Expedita, mollitia incidunt!</p>
                </Grid>

            </Grid>


        </div>
    )
}
