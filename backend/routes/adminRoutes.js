const express = require("express");
const router = express.Router();
const path=require("path")
const name=path.resolve()
// const { verifyToken } = require("../middelware/jwtToken");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,name+"/"+"images")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now().toString() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })
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
  AddOwnUniversties,
  ViewAllOwnUnviersties,
  DeleteOwnUniversities,
  AddBusineesPartners,
  ViewAllBusinessPartners,
  DeleteBusinessPartners,
  UploadImage,
  ViewSingleBlog,
  AddNewsAndEvents,
  DeleteNewsAndEvents,
  ViewAllNewsAndEvents,
  EditAwards,
  BlogAwards,
  EditBusiness,
  EditInstitute,
  EditLeaderShip,
  EditMedia,
  EditMilestone,
  EditNewsAndEvents,
  EditParterns
} = require("../controls/adminControls");

router.route("/login").post(Login);
router.route("/add-institute").post(ADDINSTITUTE);
router.route("/edit-institute").post(EditInstitute)
router.route("/view-all-institute").get(viewAllInstitute);
router.route("/delete-blog/:id").delete(DeleteInstitute);
router.route("/add-partners").post(AddPartners);
router.route("/view-all-partners").get(viewAllPartners);
router.route("/edit-partners").post(EditParterns)
router.route("/delete-partners/:id").delete(DeletePartners);
router.route("/add-clients").post(AddClinets);
router.route("/view-all-clients").get(ViewAllClients);
router.route("/delete-clients/:id").delete(DeleteClients);
router.route("/add-media").post(AddMedia);
router.route("/edit-media").post(EditMedia)
router.route("/delete-media/:id").delete(DeleteMedia);
router.route("/view-all-media").get(ViewAllMedia);
router.route("/add-blog").post(AddBlog);
router.route("/edit-blog").post(BlogAwards)
router.route("/view-all-blog").get(ViewAllBlog);
router.route("/delete-media-blog/:id").delete(DeleteBlog);
router.route("/add-leadership").post(AddLeadership);
router.route("/edit-leadership").post(EditLeaderShip)
router.route("/view-all-leadership").get(ViewAllLeadership);
router.route("/delete-leadership/:id").delete(DeleteLeadership);
router.route("/view-all-awards").get(ViewAllAwards);
router.route("/add-awards").post(AddAwards);
router.route("/edit-awards").post(EditAwards)
router.route("/delete-awards/:id").delete(DeleteAwards);
router.route("/add-milestones").post(AddMilestones);
router.route("/view-all-milestones").get(ViewAllMilestones);
router.route("/edit-milestone").post(EditMilestone)
router.route("/delete-milestones/:id").delete(DeleteMilestones);
router.route("/add-own-universities").post(AddOwnUniversties);
router.route("/view-all-own-universities").get(ViewAllOwnUnviersties);
router.route("/delete-own-universities/:id").delete(DeleteOwnUniversities);
router.route("/add-business-partners").post(AddBusineesPartners);
router.route("/view-all-business-Partners").get(ViewAllBusinessPartners);
router.route("/edit-business-partners").post(EditBusiness)
router.route("/delete-business-partners").delete(DeleteBusinessPartners);
router.route("/view-single-blog/:id").get(ViewSingleBlog);
router.route('/add-news').post(AddNewsAndEvents)
router.route("/view-all-news").get(ViewAllNewsAndEvents)
router.route("/edit-news").post(EditNewsAndEvents)
router.route("/delete-news/:id").delete(DeleteNewsAndEvents)
router.route("/image-uploading").post(upload.single("image"), UploadImage);

module.exports = router;
