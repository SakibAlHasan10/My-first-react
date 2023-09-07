// export default function Todo({task, isDone}){
//     return (
//         <li>task {task}</li>
//     )
// }
// conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>finished: {task}</li>
//     }else{
//         return <li>Work on: {task}</li>
//     }
// }
// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>finished: {task}</li>
//     }
//         return <li>Work on: {task}</li>
    
// }

// conditional rendering option 3
// export default function Todo({task, isDone}){
//     return isDone ? <li>finished: {task}</li> : <li>Work on: {task}</li>
    
// }
// conditional rendering option 4 &&
// export default function Todo({task, isDone}){
//     return (<li>{task} {isDone && ': Done'}</li>)
    
// }
// conditional rendering option 5 ||
// export default function Todo({task, isDone}){
//     return (<li>{task} {isDone || ': do it'}</li>)
    
// }

// conditional rendering option 2
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>finished: {task}</li>
    }
        listItem = <li>Work on: {task}</li>
    return listItem
}