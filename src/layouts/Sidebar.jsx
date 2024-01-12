import { Grid, Stack } from '@mui/material'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='sidebar'>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                sx={{ height: '100%' }}
            >

                <Grid item xs={2}>
                    <h1>Milo</h1>
                </Grid>

                <Grid item xs={8}>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </Grid>

                <Grid item xs={2}>
                    <button>Sign out</button>
                </Grid>

            </Grid>

        </div>


    )
}

