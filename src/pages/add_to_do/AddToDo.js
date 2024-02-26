import PageHeader from "../../component/page_header/PageHeader";
import {
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  FormControl,
  InputLabel,
  NativeSelect,
  Grid,

} from "@mui/material";

import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../service/api";
import "./AddToDo.css";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";

const AddToDo = () => {
  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: ["Public Sans", "sans-serif"].join(","),
      color: "white",
    },
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calender, setCalender] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let res = await api.addTodo({
        title,
        description,
        calender,
      });
      if (res && res.data === "OK") {
        setTitle("");
        setDescription("");
        setCalender("");
      }
    } catch (err) {}
  }

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={4} md={2}>
            <PageHeader title="افزودن" />
          </Grid>

          <Grid
            item
            xs={12}
            md={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: { lg: "10%", md: "10%", sm: "10%", xs: "2%" },
            }}
          >
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
              <Grid
                container
                spacing={1}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid item xs={10} sm={6} md={6}>
                  <TextField
                    className="add-to-do-textfield"
                    type="text"
                    color="primary"
                    label="عنوان"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    fullWidth
                    required
                    variant="standard"
                    dir="rtl"
                    inputProps={{
                      style: {
                        color: "white",
                        fontSize: "14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#fff",
                        paddingRight: "5px",
                        opacity: "50%",
                        fontSize: "16px",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        padding: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={6}>
                  <TextField
                    className="add-to-do-textfield"
                    type="text"
                    color="primary"
                    label="توضیح کامل"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    fullWidth
                    required
                    variant="standard"
                    dir="rtl"
                    inputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#fff",
                        paddingRight: "5px",
                        opacity: "50%",
                        fontSize: "16px",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        padding: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={10} sm={6} >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                      autoFocus={false}
                      
                      value={calender}
                      onChange={(newValue) => {
                        setCalender(newValue)}}
                        slotProps={{
                          textField: {
                            sx: {
                              ".MuiInputBase-root": {
                                borderRadius: "8px",
                                border: "none",
                                backgroundColor: "#31A2A9",
                                direction:"rtl",
                                ":hover":"none"
                              },
                              width:"100%",
                            },
                          },
                        }}

                       
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={10} sm={6} md={6}
                sx={{marginTop:"8px"}}
                >
                  <FormControl
                    className="add-to-do-textfield"
                    fullWidth
                    sx={{ borderRadius: "8px", backgroundColor: "#31A2A9" }}
                  >
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      دسته بندی
                    </InputLabel>

                    <NativeSelect
                      disableUnderline
                      inputProps={{
                        name: "دسته بندی",
                        id: "uncontrolled-native",

                        style: {
                          color: "white",
                          paddingRight: "5px",
                        },
                      }}
                    >
                      <option>پیش فرض</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  placeholder="شرح"
                  sx={{
                    height: "193px",
                    "& fieldset": { border: "none" },
                    backgroundColor: "#31A2A9",
                    borderRadius: "8px",
                    color: "white",
                    marginTop: "5%",
                  }}
                ></TextField>
              </Grid>
              <Grid sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  type="submit"
                  sx={{
                    marginTop: "7%",
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "#F1C400",
                  }}
                >
                  ذخیره
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AddToDo;
