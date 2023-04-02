//routes/main/main.jsx
import Hero from "./hero-section/hero-section.jsx";
import {Box} from '@mui/material'
export default function Mainpage() {
  return (
    <>
    <Box p={3} sx={{ borderRadius: '12px' }}>
      <Hero />
      </Box>
    </>
  );
}
