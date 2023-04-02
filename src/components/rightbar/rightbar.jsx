//components/rightbar/rightbar.jsx
import Trending from './trending/trending.jsx'
import {Box} from '@mui/material'

export default function Rightbar(){
  return (
    <>
      <Box p={2} sx={{ display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
        <Trending />
      </Box>
    </>
  )
}
