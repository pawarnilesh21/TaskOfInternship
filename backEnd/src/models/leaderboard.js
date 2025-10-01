
import mongoose from 'mongoose'

const leaderboardSchema = new mongoose.Schema({
  leaderboard:[{
    rank:Number,
    name:String,
    score:Number,
  },],
},{collection:'leaderboard'})

const leaderBoard = mongoose.model('leaderBoard', leaderboardSchema)

export default leaderBoard

