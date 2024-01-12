import { Grid, Stack } from '@mui/material'
import React from 'react'
import TopSection from '../components/TopSection'
import BottomSection from '../components/BottomSection'

export default function Content() {
    return (
        <div className='content'>

            <Grid container
                direction="column"
                justifyContent="center"
                sx={{ height: '100%' }}
            >
                {/* Top Column */}
                <Grid item xs={6}>
                    <TopSection />
                </Grid>

                {/* Bottom Column */}
                <Grid item xs={6}>
                    <BottomSection />
                </Grid>


            </Grid>

        </div>
    )
}
