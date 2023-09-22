import './App.css';
import DesignImage from './Components/DesignImage';


function App() {
  

  return (
    <div >
       <DesignImage />
    </div>
  )
}

export default App;
// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from "react"

// function App() {
//   const arr = [
//     { id: 1, src: "/image1.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 2, src: "/image2.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 3, src: "/image3.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 4, src: "/image4.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 5, src: "/image5.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 6, src: "/image6.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 7, src: "/image7.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 8, src: "/image8.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 9, src: "/image9.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 },
//     { id: 10, src: "/image10.jpeg", comments: [{ userId: 123, body: "comment1" }, { userId: 124, body: "comment 2" }], like: 0, dislike: 0 }
//   ]
//   const [comment, setComment] = useState("")
//   const [images, setImage] = useState(arr)

//   const handleTextareaChange = (e, index) => {
//     const newValues = [...comment];
//     console.log([...comment])
//     newValues[index] = e.target.value;
//     setComment(newValues);

//   }

//   const commentHandle = (id) => {
//     const newArr = images.map((ele) => {
//       if (ele.id == id) {
//         const obj = {
//           userId: ((ele.comments[ele.comments.length - 1]).userId + 1),
//           body: comment
//         }
//         return { ...ele, comments: [...ele.comments, obj] }
//       } else {
//         return { ...ele }
//       }
//     })

//     setImage(newArr)
//     const newValues = [...comment];
//     newValues[id - 1] = "";
//     setComment(newValues);

//   }
//   return (
//     <div className="App">
//       {images.map((ele, index) => {
//         return (
//           <div>
//             <img src={ele.src} alt={`Image ${ele.id}`} />
//             <h4>Likes-{ele.like}</h4>
//             <button>Like</button>
//             <h4>Dislike-{ele.dislike}</h4>
//             <button>Dislike</button>
//             <ul>
//               {ele.comments.map((comment) => {
//                 return <li>{comment.body}</li>
//               })}
//             </ul>
//             <textarea
//               key={ele.id}
//               value={comment[index]}
//               onChange={(e) => handleTextareaChange(e, index)}
//             />
//             <button onClick={() => commentHandle(ele.id)}>Save</button>
//           </div>
//         )
//       })}
//     </div >
//   );
// }

// export default App;
