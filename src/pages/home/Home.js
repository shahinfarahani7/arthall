import PageHeader from "../../component/page_header/PageHeader";
import {
  Divider,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ToDoListTable from "./to_do_list_table/ToDoListTable";


const Home = () => {
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: ["Public Sans", "sans-serif"].join(","),
      color: "white",
      fontWeight: "bold", fontSize: "14px"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item md={2}>
          <PageHeader title="لیست" />
        </Grid>

        <Grid
          item
          xs={12}
          md={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { lg: "15% 0", md: "15% 0", sm: "5% 5%", xs: "2% 2%" },
          }}
        >
          <Grid sx={{ display: "flex" }}>
            <Typography >
              پیش فرض
              <Divider
                sx={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#F1C400",
                  marginTop: "2%",
                }}
              />
            </Typography>
            <Typography sx={{ marginRight: "5%" }}>دسته بندی </Typography>
          </Grid>

          <Grid>
            <TextField
              placeholder="جستجو"
              sx={{
                height: "53px",
                "& fieldset": { border: "none" },
                backgroundColor: "#31A2A9",
                borderRadius: "8px",
                margin: "3% 0",
                width: { xs: "200px", sm: "50%" },
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
          <ToDoListTable />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
