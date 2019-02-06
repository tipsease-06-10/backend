const express = require("express");
const route = express.Router();
// const { multerUploads, dataUri } = require("../../common/multer");

// const { uploader, cloudinaryConfig } = require("../../config/cloudinary");

const db = require("../../data/dbConfig");
// cloudinaryConfig(route);

route.get("/", async (req, res) => {
  try {
    const workers = await db("workers")
      .join("occupation", "workers.occupation", "occupation.name")
      .select(
        "workers.id",
        "workers.username",
        "workers.profile_photo",
        "workers.working_since",
        "workers.first_name",
        "workers.last_name",
        "workers.tagline",
        "workers.user_type",
        "workers.occupation"
      );
    res.status(200).json(workers);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

// route.post("/:id/upload", multerUploads, async (req, res) => {
//   const { id } = req.params;
//   try {
//     const file = dataUri(req).content;
//     const result = await uploader.upload(file);
//     const imgUrl = result.url;
//     await db("workers")
//       .where({ id })
//       .first()
//       .update({ profile_photo: imgUrl });
//     if (req.file) {
//       res.status(200).json({
//         message: `image has been uploaded`,
//         data: { imgUrl }
//       });
//     } else {
//       res.status(400).json({ message: "no file was provided" });
//     }
//   } catch (err) {
//     res.status(400).json({
//       message: `something went wrong while processing the request`,
//       data: { err }
//     });
//   }
// });
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const worker = await db("workers")
      .where({ id })
      .first();
    const tips = await db("tips")
      .where({ worker_id: id })
      .select("tip_date", "tip_amount");
    const workerInfo = { ...worker, tips: tips };
    res.status(200).json(workerInfo);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

route.post("/", async (req, res) => {
  const newWorker = req.body;

  try {
    const result = await db("workers").insert(newWorker);
    res
      .status(201)
      .json({ message: `worker created with the id of ${result}` });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const change = req.body;
  try {
    const chosen = await db("workers")
      .where({ id })
      .first();
    if (chosen) {
      const updateId = await db("workers")
        .where({ id })
        .first()
        .update(change);
      res.status(202).json({
        message: `worker with the id of ${updateId} has been updated`
      });
    } else {
      res.status(404).json({ message: "worker not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", err: err });
  }
});

module.exports = route;
