import { Box, Grid } from "@material-ui/core";
import React from "react"; 
import Gallery from "./gallery.component";
import { SortForm } from "./sortForm.component";



export const Main = props => {
    return(
        <main className="main">
            <Box p={2}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={3}>
                        <SortForm/>
                    </Grid>
                    <Grid item container md={9}>
                        {/* <Gallery/> */}
                    </Grid>
                </Grid>
            </Box>
            
        </main>
    )
}
