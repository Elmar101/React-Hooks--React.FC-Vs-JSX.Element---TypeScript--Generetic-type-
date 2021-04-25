import { useState } from "react";

interface Props<T> {
    name: string;
    data: T
}
const GeneretcReact:React.FC< Props<string> > = ({ name,data }) => {

    const [state] = useState<{name:string, data:string, year?:string}>( { name:'js', data:'data1' } );
    
    return (
        <div style={{background:'red' ,color: "#ffffff"}}>
            <hr/>
            <h1>GenereticsReact</h1> 
            <hr/>
            <strong>props data: </strong> <small>{name} -- {data}</small>
            <br/><br/>
            <strong>state data: </strong> {state.name} -- {state.data}
            <hr/>
        </div>
    )
}

export default GeneretcReact
