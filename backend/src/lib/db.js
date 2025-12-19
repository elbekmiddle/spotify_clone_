import mongoose from 'mongoose'
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI)
		console.log(`🗄️ mongodb ga muvafaqiyatli ulandi ${conn.connection.host}`)
	} catch (error) {
		console.log('❌ mongodb muvafaqiyatsiz ulandi' + error)
		process.exit(1)
	}
}
