import axios from "axios";
import {baseUrl} from './constent/constents'
const instance = axios.create({
    baseURL: baseUrl
})


export default instance