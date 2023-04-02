import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 320, boxShadow: 'none' }}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ width: 80, height: '100%' }} image="https://source.unsplash.com/random" alt='an image' />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography gutterBottom variant="h6" fontWeight="bold" textAlign="right">
            an image that was seen in the abyss and now dead
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
