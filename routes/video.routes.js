module.exports = app => {
    const videos = require("../controllers/video.controller.js")

    app.post("/videos/", videos.create)

    app.patch("/videos/", videos.getAll)

    app.get("/videos/:videoId", videos.getById)

    app.get("/videos/:userId", videos.getAllByUserId)

    app.get("/videos/feed/:userId", videos.getFeed)

    app.delete("/videos/:videoId", videos.delete)

}