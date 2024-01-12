import { Stack } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
       <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h1>Milo</h1>

        <button>Submit</button>

        </Stack>
      </div>
  )
}
