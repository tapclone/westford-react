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
  AddLeadership,
  ViewAllLeadership,
  DeleteLeadership,
  AddAwards,
  ViewAllAwards,
  DeleteAwards,
  AddMilestones,
  ViewAllMilestones,
  DeleteMilestones,
  UploadImage,
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
router.route("/add-leadership").post(AddLeadership);
router.route("/view-all-leadership").get(ViewAllLeadership);
router.route("/delete-leadership/:id").delete(DeleteLeadership);
router.route("/view-all-awards").get(ViewAllAwards);
router.route("/add-awards").post(AddAwards);
router.route("/delete-awards/:id").delete(DeleteAwards);
router.route("/add-milestones").post(AddMilestones)
router.route("/view-all-milestones").get(ViewAllMilestones)
router.route("/delete-milestones/:id").delete(DeleteMilestones)
router.route("/view-single-blog/:id").get(ViewSingleBlog);
router.route("/image-uploading").post(upload.single("image"), UploadImage);

module.exports = router;
