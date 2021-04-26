import { useReducer } from "react";

type Actions = {type: 'add',id: number, text: string} | {type: 'remove', id: number};

interface Todo {
   id: number;
   text: string;
   complete: boolean;
};

type State = Todo[];

const TodoReducer = (state:State ,action: Actions)=>{
   switch(action.type){
      case 'add':
         return [ ...state, {id: action.id , text: action.text, complete: false} ];
      case 'remove':
         return state.filter(data=> action.id != data.id);
      default:
         return state;
   }
}
 
const TypeReducer:React.FC = () => {
   const [state, dispatch] = useReducer( TodoReducer,[])

   return (
      <div style={{background: 'blue', color: '#fff'}}>
         <h1>TypeReducer</h1>
         <h1 style={{fontSize: '25px'}}>
            {JSON.stringify(state)} 
         </h1>
         <button onClick ={()=> dispatch({type: 'add', id: 1,text: 'reducer'})}> add </button>
         <button onClick ={()=> dispatch({type: 'remove', id: 1})}>
            remove 
         </button>
      </div>
   )

}

export default TypeReducer
