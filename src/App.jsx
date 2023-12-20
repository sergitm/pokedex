import Navbar from "./Navbar/Navbar"
import Content from "./Content/Content"
import { Provider } from "react-redux"
import store from "./redux/store"
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function App(){
    return (
        <Provider store={store}>
            <Navbar />
            <Content />
        </ Provider>
    )
}