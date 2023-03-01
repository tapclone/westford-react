import "./Leadership.css";
import { React, useState, useEffect } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Project() {
  const [loading, setLoading] = useState(false);
  const [Project, setProject] = useState([]);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = useState();
  const [edit, setEdit] = useState(null);
  const adminToken = localStorage.getItem("adminToken");
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    if (!open) {
      setImage();
      setValue("Name", null);
      setValue("Role", null);
    }
  }, [open]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-leadership");
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [loading]);
  const onSubmit = async (data) => {
    const obj = {
      name: data.Name,
      position: data.Role,
      Image: image,
    };
    if (image) {
      if (edit) {
        obj["id"]=edit 
        try {
          const { data } = await axios.post("/api/admin/edit-leadership", obj);
          setImage("");
          setLoading(!loading);
          handleClose();
        } catch (error) {
          setError("Something Went Wrong");
        }
      } else {
        try {
          const { data } = await axios.post("/api/admin/add-leadership", obj);
          setImage("");
          setLoading(!loading);
          handleClose();
        } catch (error) {
          setError("Something Went Wrong");
        }
      }
    } else {
      setError("Please Update Field");
    }
  };

  const DeleteBlog = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const config = {
            headers: {
              "auth-token": adminToken,
            },
          };
          await axios
            .delete(`/api/admin/delete-leadership/${id}`, config)
            .then((res) => {
              if (loading) {
                setLoading(false);
              } else {
                setLoading(true);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        swal("Your Data Is Safe");
      }
    });
  };
  const imageUploaing = async (e) => {
    const length = e.target.files.length;
    let formData = new FormData();
    const file = e.target.files[0];
    //   const fileName = e.target.files[i].name;
    formData.append("image", file);

    //   formData.append("file", fileName);
    try {
      const { data } = await axios.post(
        "/api/admin/image-uploading",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setImage(data);
    } catch (error) {
      console.log(error);
    }
  };
  const EditLeaderShip = (items) => {
    setValue("Name", items.name);
    setValue("Role", items.position);
    setImage(items.Image);
    handleOpen();
    setEdit(items._id);
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                  <h4>Enter Name</h4>
                  <div class="input-group input-group-icon">
                    <input
                      type="text"
                      placeholder="Name"
                      {...register("Name", { required: true })}
                      required
                    />
                    <div class="input-icon">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <div class="input-group input-group-icon">
                    <input
                      type="text"
                      placeholder="Role"
                      {...register("Role", { required: true })}
                      required
                    />
                    <div class="input-icon">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <h4>ADD IMAGE</h4>
                  <div class="input-group input-group-icon">
                    <input
                      type="file"
                      onChange={(e) => {
                        imageUploaing(e);
                      }}
                      placeholder="Enter Feature Name"
                    />
                    <div class="input-icon">
                      <i class="fa fa-key"></i>
                    </div>
                  </div>
                </div>
                <div
                  class="input-group input-group-icon"
                  style={{ display: "contents", float: "left" }}
                >
                  {image && (
                    <img
                      src={image}
                      style={{ width: "3rem", height: "6rem" }}
                    ></img>
                  )}
                </div>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#4CAF50",
                      border: "none",
                      color: "white",
                      padding: "8px 8px",
                      textAlign: "center",
                      textDecoration: "none",
                      borderRadius: "3px",
                      display: "inline-block",
                      fontSize: "16px",
                      marginRight: "1rem",
                      marginTop: "2rem",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <div
        className="tableMain"
        style={{ marginLeft: "5rem", marginTop: "4rem" }}
      >
        <button
          className="addBtn"
          style={{
            marginTop: "2rem",
            marginLeft: "70%",
            marginBottom: "1%",
            padding: "7px",
            color: "white",
            backgroundColor: "cornflowerblue",
            border: "aliceblue",
            borderRadius: "11px",
          }}
          onClick={handleOpen}
        >
          ADD LEADERSHIP
        </button>
        <div class="header_fixed">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Project.map((items, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td style={{ textAlign: "center" }}>
                      <img
                        src={items?.Image}
                        style={{ width: "5rem", height: "5rem" }}
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>{items.name}</td>
                    <td style={{ textAlign: "center" }}>{items.position}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        onClick={(e) => {
                          DeleteBlog(items._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        style={{ marginLeft: "2rem" }}
                        onClick={(e) => {
                          EditLeaderShip(items);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Project;
