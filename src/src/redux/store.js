import { legacy_createStore  as createStore  } from "redux"; 
import { postReducer } from "./reducer/postDonationReducer";


const store=createStore(postReducer)

export default store;