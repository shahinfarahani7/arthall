import { Grid } from "@mui/material";
import "./Content.css";

const Content = ({ children }) => {
    return (
        <Grid className="content-container" container>
            <Grid item xs={0} sm={1} md={2} />
            <Grid item xs={12} sm={10} md={8} >
                {children}
            </Grid>
            <Grid item xs={0} sm={1} md={2} />
        </Grid>
    )
}

export default Content;