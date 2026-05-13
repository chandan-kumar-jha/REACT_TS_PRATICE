import type { Comment } from "../types/comments";
import { api } from "./Base_api";
import { Client_api_call } from "./Client_api_req";


export async function get_comment (postId : number){

    return Client_api_call<Comment[]>(`${api}/posts/${postId}/comments`)
}