import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({ _id : {$ne: loggedInUserId} }).select("-password");    //.select("-password");  this will not show the password of users in the postman api

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({error: "Internal server error"});

    }
}

// import User from "../models/user.model.js";                      //for postman , it will show all users

// export const getUsersForSidebar = async (req, res) => {
//     try {

//         const loggedInUserId = req.user._id

//         const filteredUsers = await User.find({ _id : {$ne: loggedInUserId} }).select("-password");                 //.select("-password");  this will not show the password of users in the postman api

//         res.status(200).json(filteredUsers);

//     } catch (error) {
//         console.log("Error in getUsersForSidebar: ", error.message);
//         res.status(500).json({error: "Internal server error"});

//     }
// }