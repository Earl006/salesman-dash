import React from 'react';
import { Box, Typography, useTheme, IconButton, Button, InputAdornment, TextField, Slide, FormControl, InputLabel, Select, MenuItem, Modal, Checkbox, FormControlLabel } from "@mui/material";
import Sidebar from '../components/global/Sidebar';

function dashboard() {
    return (
        <>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: "20px", marginTop: "70px" }}>
                </Box>
            </Box>
                </>
    );
}

export default dashboard;