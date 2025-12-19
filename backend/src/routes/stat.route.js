import {Router} from "express"
import { Song } from '../models/song.model.js'
import { User } from '../models/user.model.js'
import { Album } from '../models/album.model.js'

const router = Router()

router.get("/", async (req, res) => {
	try {
		// const totalSongs = await Song.countDocuments()
		// const totalUsers = await User.countDocuments()
		// const totalAlbums = await Album.countDocuments()

		const [totalSongs, totalAlbums, totalUsers, uniqueArtits] = await Promise.all([
			Song.countDocuments(),
			Album.countDocuments(),
			User.countDocuments()
		])
	} catch (error) {
		
	}

})

export default router