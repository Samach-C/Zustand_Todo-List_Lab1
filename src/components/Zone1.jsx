import React, { useState } from "react";
import useStore from "../store/my-store";
import { toast } from "react-toastify";

const Zone1 = () => {
  const { arr, addArr, delArr, editArr } = useStore((state) => ({
    arr: state.arr,
    addArr: state.addArr,
    delArr: state.delArr,
    editArr: state.editArr,
  }));

  const [input1, setInput1] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleClickAdd = () => {
    if (input1.trim() === "") {
      toast.error("Please enter a valid input");
      return;
    }
    addArr(input1);
    setInput1("");
    toast.success("Item added successfully");
  };

  const handleOnChange = (e) => {
    setInput1(e.target.value);
  };

  const handleClickDelete = (id) => {
    delArr(id);
    toast.error("Item deleted successfully");
  };

  const handleClickEdit = (item) => {
    setEditingItem(item.id);
    setEditInput(item.title);
  };

  const handleEditChange = (e) => {
    setEditInput(e.target.value);
  };

  const handleSaveEdit = (id) => {
    if (editInput.trim() === "") {
      toast.error("Please enter a valid input");
      return;
    }
    editArr(id, editInput);
    setEditingItem(null);
    setEditInput("");
    toast.success("Item updated successfully");
  };

  return (
    <div className="flex flex-col w-3/4 md:w-1/2 lg:w-1/3 mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 flex justify-center items-center text-gray-800">ToDo List</h1>
      <div className="mb-4">
        <input
          placeholder="Please Word."
          className="input input-bordered w-full max-w-xs p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={input1}
          onChange={handleOnChange}
        />
      </div>
      <button
        onClick={handleClickAdd}
        className="btn btn-success w-full mb-4 py-2 px-4 rounded-lg shadow-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add
      </button>
      <ul className="list-disc pl-1 space-y-2">
        {arr.map((item) => {
          if (editingItem === item.id) {
            return (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
              >
                <input
                  className="input input-bordered flex-grow p-2 border rounded-md shadow-sm mr-2"
                  type="text"
                  value={editInput}
                  onChange={handleEditChange}
                />
                <button
                  onClick={() => handleSaveEdit(item.id)}
                  className="btn btn-success py-1 px-2 text-green-600 hover:bg-green-100 rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingItem(null)}
                  className="btn btn-error py-1 px-2 text-red-600 hover:bg-red-100 rounded-lg ml-2"
                >
                  Cancel
                </button>
              </li>
            );
          } else {
            return (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
              >
                {item.title}
                <div>
                  <button
                    onClick={() => handleClickEdit(item)}
                    className="btn btn-warning py-1 px-2 text-yellow-600 hover:bg-yellow-100 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleClickDelete(item.id)}
                    className="btn btn-error py-1 px-2 text-red-600 hover:bg-red-100 rounded-lg ml-2"
                  >
                    Del
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Zone1;



// ไม่Challenge!!

// const Zone1 = () => {
//   const [txt, setTxt] = useState("");
//   const { arr, addArr, delArr } = useStore(
//     useShallow((state) => ({
//       arr: state.arr,
//       addArr: state.addArr,
//       delArr: state.delArr,
//     }))
//   );

//   const handleOnChange = (e) => {
//     setTxt(e.target.value);
//   };

//   const handleClickAdd = () => {
//     // console.log(txt)
//     addArr(txt);
//     toast.success("Add Success")
//   };

//   const handleDelete = (id) => {
//     delArr(id);
//     toast.success("Remove Success")
//   };

//   return (
//     <div className="w-1/2 gap-2 bg-lime-100">
//       <h1 className="text-2xl pt-4 font-bold h-full flex justify-center">
//         Todo List
//       </h1>
//       <div className="flex gap-2 p-2">
//         <input
//           className="btn btn-outline w-[80%] bg-slate-300"
//           type="text"
//           onChange={handleOnChange}
//         />
//         <button
//           className="btn btn-active btn-primary w-12 h-10"
//           onClick={handleClickAdd}
//         >
//           Add
//         </button>
//       </div>
//       <div className="flex flex-col gap-2 p-2 ">

//         {arr.map((item, index) => (
//           <div className="flex gap-2">
//           <p className="border bg-slate-200 w-[500px] flex justify-center items-center" key={index}>
//             {index + 1}. {item.title}

//           </p>
//           <button
//               className="border w-14 h-14 flex justify-center items-center bg-red-200"
//               onClick={() => handleDelete(item.id)}
//             >
//               <svg
//                 width="30px"
//                 height="30px"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   {" "}
//                   <path
//                     d="M7.69231 8.70833H5V8.16667H9.84615M7.69231 8.70833V19H16.3077V8.70833M7.69231 8.70833H16.3077M16.3077 8.70833H19V8.16667H14.1538M9.84615 8.16667V6H14.1538V8.16667M9.84615 8.16667H14.1538"
//                     stroke="#f50505"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>{" "}
//                   <path
//                     d="M10 11V17"
//                     stroke="#f50505"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>{" "}
//                   <path
//                     d="M12 11V17"
//                     stroke="#f50505"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>{" "}
//                   <path
//                     d="M14 11V17"
//                     stroke="#f50505"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   ></path>{" "}
//                 </g>
//               </svg>
//             </button>
//           </div>

//         ))}
//       </div>
//     </div>
//   );
// };

// export default Zone1;
