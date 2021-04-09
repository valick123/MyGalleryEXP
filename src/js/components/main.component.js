import { Box, Grid } from "@material-ui/core";
import React from "react"; 
import Gallery from "./gallery.component";



export const Main = props => {
    return(
        <main className="main">
            <Box p={2}>
                <Grid container spacing={2} >
                    <Grid item md={3}>
                        sort form
                    </Grid>
                    <Grid item container md={9}>
                        <Gallery/>
                    </Grid>
                </Grid>
            </Box>
            
        </main>
    )
}
