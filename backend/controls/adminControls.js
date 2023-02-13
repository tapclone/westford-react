const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const collection = require("../config/collection");
const generateToken = require("../utils/jwtToken");
const { ObjectId } = require("mongodb");
const { PROJECT_COLLECTION } = require("../config/collection");
const { BLOG_COLLECTION } = require("../config/collection");
const { uploadS3 } = require("../middelware/S3");

const Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (username == "weastford@gmail.com"&& password =="password") {
    const token = generateToken(password);
    res.status(200).json(token);
  } else {
    res.status(401).json("Invalid Details");
  }
});

const ADDINSTITUTE = asyncHandler(async (req, res) => {
  const blogData = req.body;
  const addBlog = await db
    .get()
    .collection(collection.INSTITUTE_COLLECTION)
    .insertOne(blogData);
  if (addBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});
const viewAllInstitute = asyncHandler(async (req, res) => {
  const viewAllBlog = await db
    .get()
    .collection(collection.INSTITUTE_COLLECTION)
    .find()
    .toArray();
  if (viewAllBlog) {
    res.status(200).send(viewAllBlog);
  } else {
    res.status(500).json("Something Went wrong");
  }
});

const DeleteInstitute = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteBlog = await db
    .get()
    .collection(collection.INSTITUTE_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const AddPartners = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.PARTNERS_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const viewAllPartners = asyncHandler(async (req, res) => {
  const viewAllBlog = await db
    .get()
    .collection(collection.PARTNERS_COLLECTION)
    .find()
    .toArray();
  if (viewAllBlog) {
    res.status(200).send(viewAllBlog);
  } else {
    res.status(200).json("No records");
  }
});

const DeletePartners = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteBlog = await db
    .get()
    .collection(collection.PARTNERS_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteBlog) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});
const AddClinets = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.CLIENTS_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllClients = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.CLIENTS_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteClients = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.CLIENTS_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const AddMedia = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.MEDIA_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllMedia = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.MEDIA_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteMedia = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.MEDIA_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const AddBlog = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllBlog = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const AddLeadership = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.LEADERSHIP_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllLeadership = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.LEADERSHIP_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteLeadership = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.LEADERSHIP_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});

const AddAwards = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.AWARDS_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllAwards = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.AWARDS_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteAwards = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.AWARDS_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});


const AddMilestones = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.MILESTONES_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllMilestones = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.MILESTONES_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteMilestones = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.MILESTONES_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});



const AddOwnUniversties = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.OWN_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllOwnUnviersties = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.OWN_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteOwnUniversities = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.OWN_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});
const AddBusineesPartners = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.BUSINESS_PARTNERS_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllBusinessPartners = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.BUSINESS_PARTNERS_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteBusinessPartners = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.BUSINESS_PARTNERS_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});
const AddNewsAndEvents = asyncHandler(async (req, res) => {
  const data = req.body;
  const addPartners = await db
    .get()
    .collection(collection.NEWS_EVENTS_COLLECTION)
    .insertOne(data);
  if (addPartners) {
    res.status(200).json("added");
  } else {
    res.status(400).json("Somthing Went Wrong");
  }
});
const ViewAllNewsAndEvents = asyncHandler(async (req, res) => {
  const ViewAllClients = await db
    .get()
    .collection(collection.NEWS_EVENTS_COLLECTION)
    .find()
    .toArray();
  if (ViewAllClients) {
    res.status(200).send(ViewAllClients);
  } else {
    res.status(200).json("No records");
  }
});

const DeleteNewsAndEvents= asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteClients = await db
    .get()
    .collection(collection.NEWS_EVENTS_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (deleteClients) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Something Went Wrong");
  }
});
const UploadImage = asyncHandler(async (req, res) => {
  console.log(req.file.path);
  const path = req.file.path;
  if (path) {
    res.status(200).json(path);
  } else {
    res.status(400).json("Something Went Wrong");
  }
  // if (req.files.file && req.files.file.length > 0) {
  //   for (let i = 0; i < req.files.file.length; i++) {
  //     uploadS3(req.files.file[i].data)
  //       .then((result) => {
  //         const obj = {
  //           url: result.Location,
  //           key: result.Key,
  //         };
  //         images.push(obj);
  //         if (images.length == req.files.file.length) {
  //           res.status(200).json(images);
  //         }
  //       })
  //       .catch((error) => {
  //         res.status(400).json("Something went wrong");
  //       });
  //   }
  // } else {
  //   uploadS3(req.files.file.data)
  //     .then((result) => {
  //       const obj = {
  //         url: result.Location,
  //         key: result.Key,
  //       };
  //       console.log(obj);
  //       res.status(200).json(obj);
  //     })

  //     .catch((error) => {
  //       res.status(400).json("Something went wrong");
  //     });
  // }
});

const ViewSingleBlog = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const singleBlog = await db
    .get()
    .collection(collection.BLOG_COLLECTION)
    .findOne({ _id: ObjectId(id) });
  if (singleBlog) {
    res.status(200).json(singleBlog);
  } else {
    res.status(400).json("Something Went Wrong");
  }
});

module.exports = {
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
  AddOwnUniversties,
  ViewAllOwnUnviersties,
  DeleteOwnUniversities,
  AddBusineesPartners,
  ViewAllBusinessPartners,
  DeleteBusinessPartners,
  DeleteMilestones,
  UploadImage,
  ViewSingleBlog,
  AddNewsAndEvents,
  DeleteNewsAndEvents,
  ViewAllNewsAndEvents,
};
