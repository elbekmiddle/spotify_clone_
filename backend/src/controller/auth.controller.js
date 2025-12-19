import {User} from "../models/user.model.js"

export const authCallback = async (req, res) => {
		try {
			const {id, firstName, lastName, imageUrl} = req.body

			const user = await User.findOne({clerckId: id})

			if(!user){
				await User.create({
						clerkId: id,
						fullName: `${firstName} ${lastName}`,
						imageUrl
				})
			}
			res.status(200).json({sucess: true})
		} catch (error) {
				console.log("Auth callak da xato", error)
				res.status(500).json({sucess: false, message: "Internal server error", error})
		}
}