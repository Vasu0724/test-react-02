
import reducerfn from "./reducerfn";
import { createStore } from "@reduxjs/toolkit";


const store = createStore(reducerfn);

export default store