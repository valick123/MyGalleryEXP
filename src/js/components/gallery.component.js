import { Grid} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import {connect} from "react-redux";
import { ImgCard } from "./imgCard.component";
import {FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 200,
        [theme.breakpoints.down("xs")]:{
            width:"100%"
        }
      },
      contentHeader:{
          display:"flex",
          justifyContent:"flex-end"
      }
}))

const ACCESS_KEY = `hP8luDb39TYzITUt1OxyQKM9UwsnBXZ5K3WNpIzM7v8`

const Gallery = props => {
    const [sort, setSetSort] = useState('');
    const classes = useStyles();
    const sortSelect = useRef()
    const sortBy = (event) => {
        setSetSort(event.target.value);
        console.log(event.target.value);
        if(event.target.value){
            props.dispatch({
                type:"SORT_DATA",
                payload:event.target.value
            })
        } else {
            props.dispatch({
                type:"RESET_DATA",
            }) 
        }
      };
    useEffect(()=>{
        
            fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${Math.round(Math.random()*5)}&per_page=20`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.dispatch({
                    type:"GET_IMG_LIST",
                    payload:data
                })
            })
    },[])
    return(
        <Grid container item spacing={2}>
            <Grid item xs={12} className={classes.contentHeader} >
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
                <Select
                    ref={sortSelect}
                    value={sort}
                    onChange={sortBy}
                    label="Sort"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"A-Z"}>A-Z</MenuItem>
                    <MenuItem value={"Z-A"}>Z-A</MenuItem>
                    <MenuItem value={"Lagest"}>Lagest</MenuItem>
                    <MenuItem value={"Smallest"}>Smallest</MenuItem>
                    <MenuItem value={"Most Popular"}>Most Popular</MenuItem>
                    <MenuItem value={"Latest"}>Latest</MenuItem>
                    <MenuItem value={"Oldest"}>Oldest</MenuItem>
                    
                </Select>
            </FormControl>
            </Grid>
            {
                props.currentImgs.map(item => {
                    return (
                        <Grid item xs={12} sm={4} md={3} key={item.id}>
                            <ImgCard info={item} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

const mapStateToProps = store =>({
    currentImgs:store.gallery.currentImgs
})

export default connect(mapStateToProps)(Gallery)