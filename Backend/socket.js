const socketIo = require("socket.io");
const userModel = require("./modles/user.model");
const captainModel = require("./modles/captain.model");
const rideModel = require("./modles/ride.model");

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on("join", async (data) => {
            const { userId, userType } = data;

            console.log(`User ${userId} of type ${userType}`);

            if (userType === "user") {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === "captain") {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });

        socket.on("disconnect", () => {
            console.log(`Client disconnected: ${socket.id}`);
        });

        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;


            if (
                !location ||
                !location.ltd ||
                !location.lng
            ) {
                return socket.emit('error', { message: 'Invalid location data.' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });
    });

}

function sendMessageToSocketId(socketId, messageObject) {
    console.log(`Sending message to ${socketId}:`, messageObject);
    
    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.error("Socket.io is not initialized.");
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };