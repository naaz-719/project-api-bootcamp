const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ⚙️ Direct MongoDB connection (no .env file needed)
const MONGO_URI =
  "mongodb+srv://naazmulla9195_db_user:RfRl16uP95V8IS0I@cluster0.vnbaq9u.mongodb.net/podcast";
const PORT = 3000;

// ✅ MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 🎬 Video Schema + Model
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Video title is required"],
  },
  description: {
    type: String,
  },
  videoUrl: {
    type: String,
    required: [true, "Video URL is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model("Video", videoSchema);

// 🌐 Routes
app.get("/", (req, res) => {
  res.send("🎥 Video Management API is running successfully!");
});

// ➕ Add New Video
app.post("/api/videos", async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    if (!title || !videoUrl) {
      return res.status(400).json({
        success: false,
        message: "Title and videoUrl are required.",
      });
    }

    const newVideo = new Video({ title, description, videoUrl });
    const savedVideo = await newVideo.save();

    res.status(201).json({
      success: true,
      message: "Video added successfully!",
      data: savedVideo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 📋 Get All Videos
app.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json({ success: true, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch videos" });
  }
});

// 🧾 Get Single Video by ID
app.get("/api/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video)
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    res.json({ success: true, data: video });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid video ID" });
  }
});

// ✏️ Update Video
app.put("/api/videos/:id", async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedVideo)
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    res.json({
      success: true,
      message: "Video updated successfully",
      data: updatedVideo,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// 🗑️ Delete Video
app.delete("/api/videos/:id", async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo)
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    res.json({ success: true, message: "Video deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid video ID" });
  }
});

// 🏁 Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
