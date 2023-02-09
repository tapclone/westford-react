const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middelware/jwtToken");
const multer = require("multer");
const upload = multer({ dest: "images/" });
const {
  Login,
  ADDINSTITUTE,
  DeleteInstitute,
  viewAllInstitute,
  AddPartners,
  DeletePartners,
  viewAllPartners,
  AddClinets,
  ViewAllClients,
  DeleteClients,
  AddMedia,
  ViewAllMedia,
  DeleteMedia,
  AddBlog,
  ViewAllBlog,
  DeleteBlog,
  AddProject,
  DeleteProject,
  ViewAllProject,
  UploadImage,
  ViewSingleProject,
  ViewSingleBlog,
} = require("../controls/adminControls");

router.route("/login").post(Login);
router.route("/add-institute").post(ADDINSTITUTE);
router.route("/view-all-institute").get(viewAllInstitute);
router.route("/delete-blog/:id").delete(DeleteInstitute);
router.route("/add-partners").post(AddPartners);
router.route("/view-all-partners").get(viewAllPartners);
router.route("/delete-partners/:id").delete(DeletePartners);
router.route("/add-clients").post(AddClinets);
router.route("/view-all-clients").get(ViewAllClients);
router.route("/delete-clients/:id").delete(DeleteClients);
router.route("/add-media").post(AddMedia);
router.route("/delete-media/:id").delete(DeleteMedia);
router.route("/view-all-media").get(ViewAllMedia);
router.route("/add-blog").post(AddBlog);
router.route("/view-all-blog").get(ViewAllBlog);
router.route("/delete-blog/:id").delete(DeleteBlog);

router.route("/add-project").post(AddProject);
router.route("/deleting-project/:id").delete(DeleteProject);
router.route("/view-all-project").get(ViewAllProject);
router.route("/view-single-project/:id").get(ViewSingleProject);
router.route("/view-single-blog/:id").get(ViewSingleBlog);
router.route("/image-uploading").post(upload.single("image"), UploadImage);

module.exports = router;
