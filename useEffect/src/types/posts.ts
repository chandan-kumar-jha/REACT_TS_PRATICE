import type { Base_interface } from "./base"

export interface Post extends Base_interface{
   readonly userId : number,
   title : string,
   body?: string
}