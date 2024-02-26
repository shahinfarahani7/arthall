import { Grid } from "@mui/material";
import "./Content.css";

const Content = ({ children }) => {
    return (
             <Grid className="content-container" container >
            <Grid item xs={12} sm={10} md={10} >
                {children}
            </Grid>
        </Grid>

       
    )
}

export default Content;