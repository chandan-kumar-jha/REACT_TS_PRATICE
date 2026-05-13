import { useEffect, useState } from "react"
import { fetches_Posts } from "./api/post.api"
import type { Post } from "./types/posts"

function App() {

  const [posts , set_Post] = useState<Post[]>([])
  //const [comments, set_Comments] = useState<Comment[]>([])


  useEffect(()=> {
   const post_data =  async () => {
        const data_Of_Post =  await fetches_Posts()
        set_Post(data_Of_Post)
    }

    post_data()

  },[])


  return (
    <>
  {
    posts && (
      <div className="min-h-screen bg-gray-100 p-8">
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          The Post Of Users
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
            posts.map((data) => (
              <ul
                key={data.id}
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
              >
                <li className="mb-4">
                  <h1 className="text-2xl font-bold text-blue-700 capitalize">
                    {data.title}
                  </h1>
                </li>

                <li>
                  <h4 className="text-gray-700 leading-relaxed">
                    <p>{data.body}</p>
                  </h4>
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    )
  }

  <h1 className="text-3xl font-bold underline bg-red-800 text-white text-center py-4">
    the post of users
  </h1>
</>
  )
}

export default App
