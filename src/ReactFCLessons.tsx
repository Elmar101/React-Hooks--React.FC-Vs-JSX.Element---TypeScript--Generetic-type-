import FormsGeneretcs from "./FormsGeneretcs"
import GeneretcReact from "./GeneretcReact"
import TypeReducer from "./TypeReducer"

type GreetingProps = {
    name: string;
    sname: string;
    age?: number;
  }
  
  export interface Greet {
    name: string;
    sname: string;
    age?: number;
    city?: string;
  }
  
  const  Greeting: React.FC<GreetingProps> = ({ name,sname }) => {
    return <h1>Hello {name} -- {sname}</h1>
  }
  
  function GetName({name} : Greet) {
    return <h1>Hello {name}</h1>
  }
  
  function GetNameFullName(props : Greet) {
    return <h1>Hello {props.name} -- {props.sname} </h1>
  }
  
  const GetSname:React.FC<Greet> = function({ sname }) {
    return <h1>Hello {sname}</h1>
  }
  

const ReactFCLessons = () => {
    return (
        <>
            <Greeting name="Elmar" sname="Amanov"/>
            <GetName name="Eldar" sname="Amanov"/>
            <GetSname name="Eldar" sname="Amanov"/>
            <GetNameFullName name="Resad" sname="Amanov"/>
            <GeneretcReact name='TypeScript FC' data='React.FC'/>
            <TypeReducer/>
            < FormsGeneretcs/>  
        </>
    )
}

export default ReactFCLessons;
