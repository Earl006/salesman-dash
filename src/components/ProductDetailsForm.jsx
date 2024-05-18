import React, { useState } from 'react';
import { Box, Typography, Button, Modal, Checkbox, FormControlLabel, TextField } from "@mui/material";

const ProductDetailsForm = ({ open, handleClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                width: '80%',
                maxWidth: 600
            }}>
                <Typography variant="h6">Product Details</Typography>
                {/* Form content */}
                <form>
                    {/* Image Upload */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <input
                            accept="image/*"
                            id="image-upload"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <label htmlFor="image-upload">
                            <Button variant="contained" component="span">
                                Upload Image
                            </Button>
                        </label>
                        <Typography variant="body1" sx={{ ml: 1 }}>
                            {selectedFile ? selectedFile.name : 'No file selected'}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        {/* Image Upload */}
                        <Box sx={{ marginRight: 2 }}>
                            <Typography variant="subtitle1">Image Upload</Typography>
                            {/* Implement your image upload component here */}
                        </Box>
                        {/* Availability */}
                        <FormControlLabel
                            control={<Checkbox />}
                            label="In Stock"
                        />
                        {/* Product Name */}
                        <TextField
                            label="Product Name"
                            fullWidth
                            margin="normal"
                        />
                    </Box>
                    {/* Sizes */}
                    <Typography variant="subtitle1">Sizes</Typography>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Small"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Medium"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Large"
                    />
                    {/* Model, Brand, Color */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Box>
                            <Typography variant="subtitle1">Model</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                            />
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">Brand</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                            />
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">Color</Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                            />
                        </Box>
                    </Box>
                    {/* Client Type */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="subtitle1">Client Type</Typography>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Type 1"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Type 2"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Type 3"
                        />
                    </Box>
                    {/* View Variations Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <Button variant="contained" color="primary">
                            View Variations
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default ProductDetailsForm;