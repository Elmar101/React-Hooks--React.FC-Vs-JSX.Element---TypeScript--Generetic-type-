interface Props <T> {
    values: T;
    children:(values:T)=> JSX.Element
}

// var values: T extends {}

/*/ Form = <T extends {values:T,children:T}>( {values,children}:Props<T> )
 -> var values: T extends {values:T,children:T}
/*/

const Form = <T extends Object>( {values,children}:Props<T> ) =>{
    return children(values);
}

const FormsGeneretcs = () => {
    return (
        <div style={{background: 'yellow', width: '190px', height:"40px" }}>
           <Form<{name: string| null ,data?: string, year: number}> 
                values={{name:"TypeScript" ,year:2018}}>
               {
                  values => <h5> {values.name } -- {values.year}</h5> 
               } 
           </Form>
        </div>
    )
}

export default FormsGeneretcs
