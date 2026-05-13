import type { Post } from "../types/posts";
import { api } from "./Base_api";
import {Client_api_call} from './Client_api_req'


export function fetches_Posts (){
    return Client_api_call<Post[]>(`${api}/posts`)
}