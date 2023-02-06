import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        playerScore: 0,
    },
    reducers: {
        setPlayerScore(state, action) {
            state.playerScore = action.payload
        }
    }
})

// 导出触发修改状态的方法
export const { setPlayerScore } = userSlice.actions
// 导出reducer函数
export default userSlice.reducer