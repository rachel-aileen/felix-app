import { Grid } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <div className='about'>

      <Grid container>

        <Grid item xs={3}>
          <img className='cat-img' src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="groovy cat" />
        </Grid>

        <Grid item xs={9}>
          <h3>Let me introduce to you Felix's cousin</h3>
        </Grid>

      </Grid>

    </div>
  )
}
