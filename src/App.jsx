import Navbar from "./Navbar/Navbar"
import SearchBar from "./Content/SearchBar/SearchBar"
import { Provider } from "react-redux"
import store from "./redux/store"

export default function App(){
    return (
        <Provider store={store}>
            <Navbar />
            <SearchBar />
        </ Provider>
    )
}