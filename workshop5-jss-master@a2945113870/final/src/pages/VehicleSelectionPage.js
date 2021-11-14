import React from 'react';
import LinkCTA from '../components/LinkCTA'
import useMenuData from '../hooks/useMenuData';
import Headline from '../components/Headline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './VehicleSelectionPage.styles';



const VehicleSelectionPage = () => {

  const menuData = useMenuData(true).filter((item) => {
    return item.isVehicle === true;
  });

  const classes = useStyles();
  return (
    <>
      <Headline text="Vehicle Selection Page" />
      {menuData.map(link => {
        return (
          <Card className={classes.root} key={link.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={link.image}
                title={link.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {link.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {link.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <LinkCTA url={link.url} color="red">More</LinkCTA>
              <LinkCTA url={link.RAQUrl} color="blue">Request A Quote </LinkCTA>
            </CardActions>
          </Card>
        );
      })}

    
    </>
  );
};

export default VehicleSelectionPage;
