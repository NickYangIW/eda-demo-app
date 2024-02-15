import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { postDataRequest } from './api/CommonService';
import { Avatar } from '@mui/material';

function App() {
  const [selectedSex, setSelectedSex] = useState("Female")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      age: data.get('age'),
      sex: selectedSex,
    }
    console.log(payload);
    const pushUserInfoMessageResult = await postDataRequest("http:localhost:8080/user", payload)

    if (pushUserInfoMessageResult.status === 200) {
      console.log("Push message successfully")
    } else {
      console.error("Push message failed")
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSex(event.target.value as string);
  };

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="https://i0.wp.com/integration.works/wp-content/uploads/2022/01/128IWFullLogopng.png?fit=188%2C50&amp;ssl=1" alt="Integration Works"/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              color="secondary"
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
            />
            <TextField
              margin="normal"
              color="secondary"
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
            />
            <Stack direction="row" spacing={2} sx={{ mt : 2 }}>
              <TextField
                margin="normal"
                color="secondary"
                fullWidth
                name="age"
                label="Age"
                id="age"
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="secondary">Sex</InputLabel>
                <Select
                  color="secondary"
                  labelId="sex-select-label-id"
                  id="sex-select"
                  value={selectedSex}
                  label="Sex"
                  onChange={handleChange}
                >
                  <MenuItem value={'Female'}>Female</MenuItem>
                  <MenuItem value={'Male'}>Male</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
