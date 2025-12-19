import express from 'express'
import dotenv from 'dotenv'

import userRoutes from './routes/user.route.js'
import adminRoutes from './routes/admin.route.js'
import authRoutes from './routes/auth.route.js'
import songRoutes from './routes/song.route.js'
import albumRoutes from './routes/album.route.js'
import statsRouter from './routes/stat.route.js'
import { connectDB } from './lib/db.js'
import { clerkMiddleware } from '@clerk/express'
import fileUpload from 'express-fileupload'
import path from 'path'
dotenv.config()

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(clerkMiddleware())
app.use(
	fileUpload({
		usetempFiles: true,
		tempFileDir: path.join(__dirname, 'tmp'),
		createParentPath: true,
		limits: {
			fileSize: 20 * 1024 * 1024, // 20 MB
	}})
)

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/songs', songRoutes)
app.use('/api/albums', albumRoutes)
app.use('/api/stats', statsRouter)


app.use((err, req, res, next) => {
	console.error(err)

	res.status(500).json({
		message: process.env.NODE_ENV === 'development' ? err.message : 'Serverda xatolik yuz berdi'
	})
})


app.listen(PORT, () => {
	console.log('spotify clone serveri ishga tushdi port ' + PORT)
	connectDB()
})
