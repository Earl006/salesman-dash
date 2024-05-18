import { useState } from 'react';
import { Box, Typography, useTheme, IconButton, Button, InputAdornment, TextField, Slide, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../components/global/Sidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DownloadIcon from '@mui/icons-material/Download';


const Clients = () => {
   
    const [selectedRow, setSelectedRow] = useState(null);

    const handleEdit = (id) => {
        setSelectedRow(id);
    };

    // Function to handle the delete action
    const handleDelete = (id) => {
        setSelectedRow(id);
    };

    // Function to handle canceling the edit
    const handleCancelEdit = () => {
        setSelectedRow(null);
    };

    // Function to handle saving the edits
    const handleSaveEdit = () => {
        setSelectedRow(null); // Reset selected row after saving
    };

    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        address: '',
        preferredBrands: '',
        type: '',
        salesman: '',
        qrCode: ''
    });

    const handleAddUserClick = () => {
        setShowAddForm(true);
    };
  
    const handleCloseForm = () => {
        setShowAddForm(false);
    };
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: '',
            mobileNumber: '',
            address: '',
            preferredBrands: '',
            type: '',
            salesman: '',
            qrCode: ''
        });
        
        handleCloseForm();
    };

    const columns = [
        { field: "name", headerName: "NAME", flex: 0.5, cellClassName: "name-column--cell" },
        { field: "address", headerName: "ADDRESS", flex: 0.5 },
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "contact", headerName: "CONTACT", flex: 0.5 },
        { field: "preferred brand", headerName: "PREFERRED BRAND", flex: 0.5 },
        { field: "salesman as", headerName: "SALESMAN AS", flex: 0.5 },
        { field: "rating", headerName: "RATING", flex: 1 },
        { field: "qr", headerName: "QR", flex: 1 },
        { field: "", headerName:"ACTIONS", flex: 1, renderCell: (params) => (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={() => handleEdit(params.id)}>
                    <EditNoteIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(params.id)}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        ) }
    ];

    const rows = [
        { id: 1, name: 'John Doe', address: '123 Main St', id: '1234', contact: '123-456-7890', 'preferred brand': 'Brand 1', 'salesman as': 'Sales', rating: 5, qr: '1234'
    },
    { id: 2, name: 'Jane Doe', address: '456 Elm St', id: '5678', contact: '234-567-8901', 'preferred brand': 'Brand 2', 'salesman as': 'Sales', rating: 4, qr: '1234' },
    ]; 

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <Box sx={{ flex: 1, padding: "20px", marginTop: "70px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Client List Display</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mr: 1,
                  borderRadius: "20px",
                  "&.MuiButton-contained": {
                    borderRadius: "20px",
                  },
                }}
                onClick={handleAddUserClick}
              >
                Add New Client
              </Button>
              <Modal
                open={showAddForm}
                onClose={handleCloseForm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Add New Client
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="FULL NAME"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="MOBILE NUMBER"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="ADDRESS"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="PREFERRED BRAND"
                      name="preferredBrands"
                      value={formData.preferredBrands}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="TYPE"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="SALESMAN"
                      name="salesman"
                      value={formData.salesman}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="QR CODE"
                      name="qrCode"
                      value={formData.qrCode}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    {/* Add more text fields for other form inputs */}
                    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          mr: 1,
                          borderRadius: "20px",
                          "&.MuiButton-contained": {
                            borderRadius: "20px",
                          },
                        }}
                      >
                        Add New Client
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          mr: 1,
                          borderRadius: "20px",
                          "&.MuiButton-contained": {
                            borderRadius: "20px",
                          },
                        }}
                        onClick={handleCloseForm}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Modal>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                mr: 1,
                borderRadius: "20px",
                "&.MuiButton-contained": {
                  borderRadius: "20px",
                },
              }}
            >
              All Clients
            </Button>
            <TextField
              placeholder=" New Suggestion Clients"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ ml: "auto" }}>
              <IconButton onClick={handleOpenFilter}>
                <FilterAltIcon />
              </IconButton>
              <IconButton>
                <DownloadIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              width: "95%",
              height: "calc(100vh - 260px)",
              marginTop: "20px",
            }}
          >
            {/* <DataGrid rows={rows} columns={columns} /> */}

            <DataGrid
              rows={rows}
              columns={columns}
              onRowEdit={handleEdit}
              components={{
                Toolbar: () => (
                  <Box sx={{ display: "flex", alignItems: "center" }}></Box>
                ),
              }}
            />
          </Box>
          {selectedRow && (
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="h6">Edit Client</Typography>
              <TextField
                label="Name"
                defaultValue={selectedRow.name}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Address"
                defaultValue={selectedRow.address}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone"
                defaultValue={selectedRow.phone}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Preferred Brand"
                defaultValue={selectedRow.preferredBrand}
                fullWidth
                margin="normal"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    mr: 1,
                    borderRadius: "20px",
                    "&.MuiButton-contained": {
                      borderRadius: "20px",
                    },
                  }}
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveEdit}
                  sx={{
                    mr: 1,
                    borderRadius: "20px",
                    "&.MuiButton-contained": {
                      borderRadius: "20px",
                    },
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          )}

          <Slide direction="left" in={openFilter} mountOnEnter unmountOnExit>
            <Box
              sx={{
                position: "fixed",
                top: 0,
                right: 0,
                height: "100vh",
                width: "300px",
                backgroundColor: "white",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                zIndex: 999,
                padding: "20px",
              }}
            >
              <Typography variant="h6">Filter Options</Typography>
              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Filter by Address"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Filter by Brands"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Date of Status"
                />
              </Box>
              <Box
                sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  onClick={handleCloseFilter}
                  sx={{
                    mr: 1,
                    borderRadius: "20px",
                    "&.MuiButton-contained": {
                      borderRadius: "20px",
                    },
                  }}
                >
                  Clear All
                </Button>
                <Button
                  onClick={handleCloseFilter}
                  variant="contained"
                  color="primary"
                  sx={{
                    mr: 1,
                    borderRadius: "20px",
                    "&.MuiButton-contained": {
                      borderRadius: "20px",
                    },
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Box>
    );
};

export default Clients;
