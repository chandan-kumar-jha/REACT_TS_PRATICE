import type { Base_interface } from "./base"

export interface Comment extends Base_interface {
    readonly postId : number,
    name: string,
    email:string,
    body:string
}