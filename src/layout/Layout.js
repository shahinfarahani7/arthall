import { Grid } from "@mui/material";

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Grid sx={{display:"flex" ,justifyContent:"center", backgroundColor:"#31A2A9" , height:"87px"}} container >
          <Grid item xs={8} sx={{ display: "flex",alignItems:"center",fontSize:"16px",fontWeight:"700" }} >
            <Grid style={{color:"white"}}>لیست کارها</Grid>
            <Grid sx={{color:"#F1C400",marginRight:"2%"}}>افزودن کار</Grid>
          </Grid>
        </Grid>
      </header>
      <main >{children}</main>
    </div>
  );
};

export default Layout;
