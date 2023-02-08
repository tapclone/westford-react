const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middelware/jwtToken");
const multer=require('multer')
const upload = multer({ dest: 'images/' })
const {
  Login,
  ADDINSTITUTE,
  DeleteBlog,
  viewAllInstitute,
  AddProject,
  DeleteProject,
  ViewAllProject,
  UploadImage,
  ViewSingleProject,
  ViewSingleBlog
} = require("../controls/adminControls");

router.route("/login").post(Login);
router.route("/add-institute").post(ADDINSTITUTE);
router.route("/view-all-institute").get(viewAllInstitute);


router.route("/delete-blog/:id").delete(DeleteBlog);
router.route("/add-project").post(AddProject);
router.route("/deleting-project/:id").delete(DeleteProject);
router.route("/view-all-project").get(ViewAllProject);
router.route("/view-single-project/:id").get(ViewSingleProject)
router.route("/view-single-blog/:id").get(ViewSingleBlog)
router.route("/image-uploading").post(upload.single("image"),UploadImage)

module.exports = router;
 