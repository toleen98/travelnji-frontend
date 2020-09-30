import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import img from "../assets/logo.jpg";

import bag1 from "../assets/bag1.jpg";
import bag from "../assets/bag.jpg";
const useStyles = makeStyles((theme) => ({
     body: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    '$jagged &': {
      '& > *:nth-child(even)': {
        paddingTop: theme.spacing(6),
      },
    },
  },
  header: {
    textAlign: 'center',
  },
  heading: {
    textTransform: 'uppercase',
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Bottels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
<div style ={h1} >
    <div >
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="water bottles  filter "
      
      />
     <CardMedia
        className={classes.media}
        image={bag1}
        title=" water bottles  filter "

      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
400ml Wooden Cover Crystal Double Wall Glass Water Bottle High Quality Prevent        </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://m.alibaba.com/product/1600112356839/Water-Bottle-Filter-400ml-Wooden-Cover.html?s=p&__detailProductImg=//s.alicdn.com/@sc01/kf/H06d845f1faf34ea1af77cf330e8d791aM.jpg_200x200.jpg&spm=a2706.wapppc2020.1998817009.8.2cfc134baPsnJF">
                      
                     visit Website
                      </Button>
     
    </Card>
    </div>


    <div >
    <br></br>
    <br></br>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=" Silicone Bottle water"
      
      />
      <CardMedia
        className={classes.media}
        image="https://sc01.alicdn.com/kf/Hb49e5499694a40dbad33fbdd3d91b655F.png_640x640q50.png"
        title=" Reusable Produce Bags "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
 Silicone Cover Glass Sports Bottle Single Wall Bamboo Wood Lid Water Bottle

        </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://m.alibaba.com/product/1600074327772/Bottle-Water-Water-Drinking-Bottle-Silicone.html?s=p&__detailProductImg=//s.alicdn.com/@sc01/kf/Hb49e5499694a40dbad33fbdd3d91b655F.png_200x200.png&spm=a2706.wapppc2020.1998817009.12.2cfc134baPsnJF">
                      
                     Visit Website
                      </Button>
     
    </Card>
    </div>


      


    <div >
    <br></br><br></br>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="sport plastic water bottle"
      
      />
      <CardMedia
        className={classes.media}
        image="https://sc01.alicdn.com/kf/Hc700c509336c465a8688287a6db080708.jpg_q50.jpg"
        title=" magic bag "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
Customized 700ML LFGB filter 2020 sport plastic water drinking bottle
    </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://m.alibaba.com/product/1600059675631/Filter-Water-Bottle-Water-Filter-Water.html?s=p&__detailProductImg=//s.alicdn.com/@sc01/kf/H811e7979922948c98f49985a23818fa3I.jpg_200x200.jpg&spm=a2706.wapppc2020.1998817009.20.2cfc134bzS5J1r">
                      
                     visit Website 
                      </Button>
     
    </Card>
    </div>

    <div ><br></br><br></br>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="water bottles"
      
      />
      <CardMedia
        className={classes.media}
        image="https://s.alicdn.com/@sc01/kf/H7a7bba33b48f4dc1832542c2fca2160fC.jpg_220x220.jpg"
        title=" magic bag "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
Unique Group Leakproof Wide Mouth Water Filter Fitting Stainless Steel Water Bottle     </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://m.alibaba.com/product/1600078465193/Water-Filter-Bottle-Filter-Water-Bottle.html?s=p&__detailProductImg=//s.alicdn.com/@sc01/kf/H9f5a9cfc7c3e499a98bb6184438688d43.jpg_200x200.jpg&spm=a2706.wapppc2020.1998817009.24.2cfc134bVlaVkV">
                      
                     visit Website 
                      </Button>
     
    </Card>
    </div>

    <div >
    <br></br><br></br>
    <Card className={classes.root}>
      <CardHeader
        avatar={
         
          <Avatar
                      aria-label="recipe"
                      src={img}
                      className={classes.avatar}
                    />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="steel bottles water"
      
      />
      <CardMedia
        className={classes.media}
        image="https://s.alicdn.com/@sc01/kf/H2761cf9b22aa44f2af9d7e082fdb9179E.jpg_220x220.jpg"
        title=" magic bag "
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Double Wall Vacuum Insulated Stainless Steel Water Bottle With Tea Filter 17 oz
        </Typography>
      </CardContent>

      <Button aria-label="visit" href="https://m.alibaba.com/product/62323862432/Water-Bottle-Filter-Filter-Water-Bottle.html?s=p&__detailProductImg=//s.alicdn.com/@sc01/kf/Hb6638a13fc22413b90cd1e7ed448c292b.jpg_200x200.jpg&spm=a2706.wapppc2020.1998817009.34.2cfc134belxOZH">
                      
                     visit Website
                      </Button>
     
    </Card>
    </div>




    </div>


  );
}




const h1={
  "width":" 50%",
 " minHeight":"50%",
  "margin":"10 auto",
   "display": "grid",
   " grid-template-columns":" repeat(auto-fill, minmax(230px, 1fr))",
   " grid-gap": "50px",
}