import React, { useRef } from 'react';
import {fade, makeStyles } from '@material-ui/core';
import {AppBar,Toolbar,Typography,IconButton,InputBase} from "@material-ui/core"
import { Brightness4,Search,RotateLeft} from "@material-ui/icons"
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
   
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export const HeaderComponent = (props) => {
  const classes = useStyles();
  const searchField = useRef();
  const dispatch = useDispatch();
  const processingSearchRequest = (e) =>{
    if(e.key === "Enter"){
      console.log(searchField.current.value);
      
      dispatch({
        type:"SEARCH_REQUEST",
        payload:searchField.current.value
      })
      searchField.current.value = "";
    }
    
  }
  const resetData = () =>{
    dispatch({
      type:"RESET_DATA"
    })
  } 
        return (
            
                <AppBar position="static" >
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Gallery
                    </Typography>
                    <IconButton onClick={resetData}>
                        <RotateLeft/>
                    </IconButton>
                    <div className={classes.search}>
                      <IconButton color="inherit" className={classes.searchIcon}>
                        <Search  />
                      </IconButton>
                      <InputBase
                      onKeyUp={processingSearchRequest}
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        inputRef={searchField}
                      />
                  </div>
                    <IconButton >
                        <Brightness4/>
                    </IconButton>
                    </Toolbar>
                </AppBar>
            
            
        )
    
}
