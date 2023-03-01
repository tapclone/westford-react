import "./Milestone.css";
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
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Project() {
  const [loading, setLoading] = useState(false);
  const [Project, setProject] = useState([]);
  const [year, setYear] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [edit, setEdit] = useState();
  const [error, setError] = useState();
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
      setValue("year", null);
      setValue("description", null);
    }
  }, [open]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-milestones");
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [loading]);
  const onSubmit = async (data) => {
    const obj = {
      description: data.description,
      year: data.year,
      Image: image, 
    };
    if (image) { 
      if (edit) {
        obj["id"] = edit;
        try {
          const { data } = await axios.post("/api/admin/edit-milestone", obj);
          setImage("");
          setLoading(!loading);
          handleClose();
        } catch (error) {
          setError("Something Went Wrong");
        }
      } else {
        try {
          const { data } = await axios.post("/api/admin/add-milestones", obj);
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
            .delete(`/api/admin/delete-milestones/${id}`, config)
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
  const EditMilstone = (items) => {
    setValue("year", items.year);
    setValue("description", items.description);
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
                  <div class="input-group input-group-icon">
                    <input
                      type="text"
                      placeholder="Year"
                      {...register("year", { required: true })}
                      required
                    />
                    <div class="input-icon">
                      <i class="fa fa-user"></i>
                    </div>
                  </div>
                  <div class="input-group ">
                    <textarea
                      type="message"
                      {...register("description", { required: true })}
                      rows={4}
                      placeholder="Description"
                    />
                  </div>
                  <h4>ADD IMAGES</h4>
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
                      style={{ width: "5rem", height: "2rem" }}
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
          ADD MILESTONES
        </button>
        <div class="header_fixed">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Image</th>
                <th>Year</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Project.map((items, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td style={{ textAlign: "center" }}>
                      <img src={items?.Image} />
                    </td>
                    <td style={{ textAlign: "center" }}>{items.year}</td>
                    <td style={{ textAlign: "center" }}>{items.description}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        onClick={(e) => {
                          DeleteBlog(items._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                      style={{marginTop:"1rem"}}
                        onClick={(e) => {
                          EditMilstone(items);
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
