import Message from "./Message"

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">  
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />


    </div> //overflow-auto allows to scroll if message gets more than a certain limit
           // if overflow-auto is not there we cann't scroll
  )
}

export default Messages


// STARTER CODE
// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">  
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />


//     </div> //overflow-auto allows to scroll if message gets more than a certain limit
//            // if overflow-auto is not there we cann't scroll
//   )
// }

// export default Messages