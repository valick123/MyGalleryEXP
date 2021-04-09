import React, { useEffect } from "react"; 
import { Card, CardActionArea ,CardActions ,CardContent ,CardMedia ,Button ,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { Favorite, AspectRatio, Event, Update } from "@material-ui/icons"
const useStyles = makeStyles(theme =>({
    root: {
      height:"100%",
      display:"flex",
      flexDirection:"column",

    },
    media: {
      height: 250,
    },
    grow:{
        flexGrow:1,      
        '&:hover':{
            textDecoration:"none"
          } 
    },
    content:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        flexBasis:115
        },
    date:{
        color:theme.palette.grey[600]
    }
  }));
export const ImgCard = props => {
    const classes = useStyles();
    const createDate = (dateStr) =>{
        let mounthList = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        let date = new Date(dateStr)
        
        return `${date.getDay()} ${mounthList[date.getMonth()]} ${date.getFullYear()}`
    }
    return(
        <Card className={classes.root} raised>
                                <CardActionArea className={classes.grow} href={props.info.links.html} target="_blank">
                                    <CardMedia
                                    className={classes.media}
                                    image={props.info.urls.small}
                                    title={props.info.user.first_name}
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {
                                                props.info.user.first_name
                                            }
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            {
                                                props.info.alt_description
                                            }
                                        </Typography>
                                        
                                    </CardContent>
                                </CardActionArea>
                                <CardContent className={classes.content}>
                                        <Typography variant="body2" component="p" color="secondary">
                                            <Favorite fontSize="small" />
                                            {
                                                props.info.likes
                                            }
                                        </Typography>
                                        
                                        <Typography variant="caption" component="p">
                                            <AspectRatio fontSize="small"/>
                                            {` ${props.info.width}px x ${props.info.height}px`}
                                        </Typography>
                                        <Typography variant="caption" component="span" className={classes.date}>
                                            <Event fontSize="small"/>
                                            {
                                                createDate(props.info.created_at)
                                            }
                                        </Typography>
                                        <Typography variant="caption" component="span" className={classes.date}>
                                            <Update fontSize="small"/>
                                            {
                                                createDate(props.info.updated_at)
                                            }
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    
                                    <Button size="small" color="primary" href={props.info.links.html} target="_blank">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </Card>
    )
}