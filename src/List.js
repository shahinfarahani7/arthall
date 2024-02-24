import { Divider, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const List = () => {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={7} sx={{ display: "flex" }}>
        <Grid
          item
          xs={4}
          sx={{
            color: "white",
            fontSize: "32px",
            fontWeight: "700",
            marginTop: "10%",
          }}
        >
          <Grid>لیست</Grid>
        </Grid>
        <Grid item xs={8} sx={{ marginTop: "25%" }}>
          <Grid
            sx={{
              display: "flex",
              fontSize: "14px",
              color: "white",
              marginRight: "2%",
              fontWeight: "500",
            }}
          >
            <Grid item xs={3} sx={{}}>
              پیش فرض
              <Divider
                sx={{
                  width: "67px",
                  height: "2px",
                  backgroundColor: "#F1C400",
                  marginTop: "10px"
                }}
              />
            </Grid>

            <Grid sx={{}}>دسته بندی </Grid>
          </Grid>
          <Grid>
            <Grid sx={{ display: "flex" }}>
              <TextField
                placeholder="جستجو"
                sx={{
                  height: "53px",
                  width: "416px",
                  "& fieldset": { border: "none" },
                  backgroundColor: "rgba(255, 255, 255, 0.100)",
                  borderRadius: "8px",
                  marginTop: "5%",
                  input: {
                    color: "white",
                    "&::placeholder": { opacity: "50%", paddingRight: "10px" },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default List;
