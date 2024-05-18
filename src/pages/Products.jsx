import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Button,
  Modal,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../components/global/Sidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useState } from "react";
import ProductDetailsForm from "../components/ProductDetailsForm";
import EditVariationsForm from "../components/EditVariationsForm";

const Products = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openEditVariationsModal, setOpenEditVariationsModal] = useState(false); // State for "Edit Variations" form

  const handleRowClick = (params) => {
    const { img } = params;
    setSelectedRow(img);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleAddProductClick = () => {
    setShowAddForm(true);
};

const handleEditVariationsClick = (params) => {
    setSelectedRow(params.id);
    setOpenModal(false); // Close the main modal form
    setOpenEditVariationsModal(true); // Open the "Edit Variations" form
};

  const handleCloseEditVariationsModal = () => {
    setOpenEditVariationsModal(false);
  };
  const handleDelete = (id) => {
    console.log("Delete product with id: ", id);
  }
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    preferredBrands: "",
    type: "",
    salesman: "",
    qrCode: "",
  });
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
        image: "",
        ref_number: "",
        name: "",
        price: "",
        availability: "",
        quantity: "",
        variations: "",
    });
    
    handleCloseForm();
};
const columns = [
    {
        field: "img",
        headerName: "IMG",
        flex: 0.6,
        cellClassName: "name-column--cell",
        sortable: false,
    },
    { field: "ref.number", headerName: "REF.NUMBER", flex: 0.7 },
    { field: "name", headerName: "NAME", flex: 0.5 },
    { field: "price", headerName: "PRICE", flex: 0.5 },
    { field: "availability", headerName: "AVAILABILITY", flex: 0.7 },
    { field: "quantity", headerName: "QUANTITY", flex: 0.5 },
    { field: "variations", headerName: "VARIATIONS", flex: 0.6 },
    
    {
        field: "actions",
        headerName: "ACTIONS",
        flex: 1.5,
        renderCell: (params) => (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="outlined"
                    onClick={() => handleEditVariationsClick(params)}
                    sx={{
                        minWidth: "auto", // Set minimum width to fit content
                        mr: 1,
                        borderRadius: "20px",
                        "&.MuiButton-contained": {
                            borderRadius: "20px",
                        },
                    }}
                >
                    Edit Variation
                </Button>
                <IconButton>
                    <EditNoteIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(params.id)}>
                    <DeleteIcon />
                </IconButton>
            </Box>
            
        ),
    },
];

  const rows = [
    {
      id: 1,
      img: "img1.jpg",
      "ref.number": "123",
      name: "Product A",
      price: "$10",
      availability: "In stock",
      quantity: 100,
      variations: "Variation A",
    },
    {
      id: 2,
      img: "img2.jpg",
      "ref.number": "456",
      name: "Product B",
      price: "$15",
      availability: "Out of stock",
      quantity: 0,
      variations: "Variation B",
    },
  ]; 

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <Box sx={{ flex: 1, padding: "20px", marginTop: "70px" }}>
        {/* Header with Notification icon and Add New Client button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Product List </Typography>
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
                onClick={handleAddProductClick}
            >
              Add New Product
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
                    Add New Product
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="IMAGE"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="REF.NUMBER"
                      name="ref.number"
                      value={formData.ref_number}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="PRICE"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="AVAILABILITY"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="QUANTITY"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="VARIATIONS"
                      name="variations"
                      value={formData.variations}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                    
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
                        Add New Product
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
        <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
          Product List
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <FilterAltIcon />
          </IconButton>
          <IconButton>
            <DownloadIcon />
          </IconButton>
        </Box>
        {/* DataGrid for displaying products */}
        <Box
          sx={{
            width: "95%",
            height: "calc(100vh - 180px)",
            marginTop: "20px",
          }}
        >
          <DataGrid rows={rows} columns={columns} onRowClick={handleRowClick} />
        </Box>

        <ProductDetailsForm open={openModal} handleClose={handleCloseModal} />
        <EditVariationsForm
          open={openEditVariationsModal}
          handleClose={handleCloseEditVariationsModal}
        />
      </Box>
    </Box>
  );
};

export default Products;
