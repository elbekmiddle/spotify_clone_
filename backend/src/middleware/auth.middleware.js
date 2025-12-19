import { clerkClient } from '@clerk/express';

export const protectRoute = async(req, res, next) => {
		if(!req.auth.userId){
			res.status(401).json({ success: false, message: 'Ruxsat berilmagan - hisobingizga kirasiz' })
		}
		next()
};

export const requireAdmin = async(req, res, next) => {
	try {
		const currentUser = await clerkClient.users.getUser(req.auth.userId);
		const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

		if(!isAdmin){
			res
				.status(403)
				.json({ success: false, message: 'Taqiqlangan - administrator huquqi kerak'})
		}
	} catch (error) {	
		return res.status(500).json({success: false, message: 'serverda xatolik yuz berdi', error})	
	}
}