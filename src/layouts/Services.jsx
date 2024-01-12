import { Grid } from '@mui/material'
import React from 'react'

export default function Services() {
  return (
    <div className='services'>



      <Grid container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >

        <Grid item xs={4}>
          <img className='cat-img' src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Grid>

        <Grid item xs={4}>
          <img className='cat-img' src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Grid>

        <Grid item xs={4}>
          <img className='cat-img' src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Grid>

      </Grid>


    </div>
  )
}
