import {Paper, Box, Button, Grid, MenuItem, Typography,FormControl, InputLabel} from "@material-ui/core";
import React from  "react";
import { makeStyles } from '@material-ui/core';
import {Formik, Form, Field} from "formik";
import {TextField, Select} from "formik-material-ui";
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme =>({
    root: {
      width: "100%",
     
    },
    input: {
      display:"inline-block"
    },
    rotate:{
      transform:"rotate(-90deg)"
    },
    
  }));

export const SortForm = props =>{
  const classes = useStyles();
  const validateSize = (values,errors, fieldName) =>{
    if(values[fieldName] && !regExpsObj.numbersOnly.test(values[fieldName])){
      errors[fieldName] = "Use only numbers";                        
    } else if(values[fieldName] > 9999){
      errors[fieldName] = "9999 is maximum";
    }
    regExpsObj.numbersOnly.lastIndex=0
  }
  const regExpsObj = {
    numbersOnly: /\d/g
  }
    return (
           <Paper>
                <Box p={2}>
                  <Formik 
                    initialValues = {{
                      minWidth:"",
                      minHeight:"",
                      maxWidth:"",
                      maxHeight:"",
                      minResolution:"",
                      maxResolution:"",
                      sinceDate:null,
                      toDate:null,
                    }}
                    validate = { values => {
                      const errors = {};
                      
                      
                      validateSize(values,errors,"minWidth")

                      
                      validateSize(values,errors,"maxWidth")

                      
                      validateSize(values,errors,"minHeight")

                      
                      validateSize(values,errors,"maxHeight")

                      return errors
                    }}
                    onSubmit = {(values, {setSubmitting}) =>{
                      setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                      }, 500);
                    }}
                    onReset
                  >
                    {({submitForm})=>(
                      <Form>
                        <Grid container direction="column" spacing={2}>
                          <Grid item container spacing={0, 1}>
                          <Grid item xs={12}>
                              <Typography>Size</Typography> 
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                component = {TextField}
                                name = "minWidth"
                                type = "number"
                                label = "Min Width"
                                fullWidth
                                
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                component = {TextField}
                                name = "minHeight"
                                type = "number"
                                label = "Min Height"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                component = {TextField}
                                name = "maxWidth"
                                type = "number"
                                label = "Max Width"
                                fullWidth
                                
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                component = {TextField}
                                name = "maxHeight"
                                type = "number"
                                label = "Max Height"
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                          <Grid item container spacing={0, 1}>
                            <Grid item xs={12}>
                              <Typography>Resolution</Typography> 
                            </Grid>
                            <Grid item xs>
                              <FormControl style={{display:"flex"}}>
                                <InputLabel htmlFor="minResolution">Min </InputLabel>
                                <Field
                                  component = {Select}
                                  name = "minResolution"
                                  label = "Min Resolution"
                                  fullWidth
                                  inputProps={{
                                    id: 'minResolution',
                                  }}
                                >
                                  
                                  <MenuItem value = "">None</MenuItem>
                                  <MenuItem value="1920x1080" >1920 x 1080</MenuItem>
                                  <MenuItem value="1080x1920" >1080 x 1920</MenuItem>
                                  <MenuItem value="1280x720" >1280 x 720</MenuItem>
                                  <MenuItem value="720x1280" >720 x 1280</MenuItem>                              
                                </Field>
                              </FormControl>
                              
                            </Grid>
                            
                            <Grid item xs>
                              <FormControl style={{display:"flex"}}>
                                <InputLabel htmlFor="maxResolution">Max </InputLabel>
                                <Field
                                  component = {Select}
                                  name = "maxResolution"
                                  label = "Max Resolution"
                                  fullWidth
                                  inputProps={{
                                    id: 'maxResolution',
                                  }}
                                >
                                  <MenuItem value = "">None</MenuItem>
                                  <MenuItem value="1920x1080" >1920 x 1080</MenuItem>
                                  <MenuItem value="1080x1920" >1080 x 1920</MenuItem>
                                  <MenuItem value="1280x720" >1280 x 720</MenuItem>
                                  <MenuItem value="720x1280" >720 x 1280</MenuItem>                              
                                </Field>
                              </FormControl>
                              
                            </Grid>
                          </Grid>
                          <Grid item container spacing={0, 1}>
                            <Grid item xs={12}>
                              <Typography>
                                Date
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Field component={DatePicker} label="Since" name="sinceDate" fullWidth/>
                              </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Field component={DatePicker} label="To" name="toDate" fullWidth/>
                              </MuiPickersUtilsProvider>
                            </Grid>
                          </Grid>
                          <Grid item >
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={submitForm}
                              fullWidth
                            >
                              Submit
                            </Button>
                          </Grid>
                          
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </Box>
            </Paper> 
        
    )    
}