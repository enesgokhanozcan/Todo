import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoSchema } from "../model";

const initialState = [] as TodoSchema[];

const todoSlice = createSlice({
    name: "tods",
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action: PayloadAction<TodoSchema>) {
                state.push(action.payload);
            },
            prepare(todo: string) {
                return { payload: { todo, isCompleted: false, id: Date.now() } };
            }

        },
        setStatus: (state, action: PayloadAction<{ id: number; isCompleted: boolean }>) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.isCompleted = action.payload.isCompleted;
            }
        }
    }


});

export const { addTodo, setStatus } = todoSlice.actions;
export default todoSlice.reducer;



