import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");  //It initializes a state variable search using the useState hook. This variable will hold the search query entered by the user.
  const {setSelectedConversation}= useConversation();
  const {conversations} = useGetConversations()

  //search users in searchbar
  const handleSubmit = (e) => {
    e.preventDefault(); //It prevents the default form submission behavior.
    if(!search) return;
    if(search.length < 3) {
        return toast.error('Search term must be at least 3 characters long')
    }

    //search algorithm
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error("No such user found!");
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput;


// STARTER CODE 
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput;