import PageHeader from "../../component/page_header/PageHeader";
import { Divider, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css"
import ToDoListTable from "./to_do_list_table/ToDoListTable";



const Home = () => {
    return (
        <div className="home-container">
            <PageHeader title="لیست" />
            <Grid>
                <Grid sx={{ display: "flex" }}>
                
                    <TextField
                        placeholder="جستجو"
                        sx={{
                            height: "53px",
                            width: "416px",
                            "& fieldset": { border: "none" },
                            backgroundColor: '#31A2A9',
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
            <ToDoListTable />
        </div>
    );
}

export default Home;