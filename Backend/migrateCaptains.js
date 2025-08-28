const mongoose = require("mongoose");
const captainModel = require("./models/captain.model"); // Adjust the path to your model

const migrateCaptainLocations = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/uber-video", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const captains = await captainModel.find({
      "location.ltd": { $exists: true },
      "location.lng": { $exists: true },
    });

    for (const captain of captains) {
      const { ltd, lng } = captain.location;

      if (typeof ltd === "number" && typeof lng === "number") {
        captain.location = {
          type: "Point",
          coordinates: [lng, ltd],
        };
        await captain.save();
        console.log(`Updated captain ${captain._id}`);
      } else {
        console.warn(`Skipped invalid coordinates for ${captain._id}`);
      }
    }

    console.log("Migration complete");
    await mongoose.disconnect();
  } catch (err) {
    console.error("Migration error:", err);
  }
};

migrateCaptainLocations();