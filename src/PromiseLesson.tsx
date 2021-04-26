import { useEffect } from "react";


const PromiseLesson = () => {

   useEffect(() => {

    const promise = new Promise((resolve,reject) => {
        const num= 5;
        if(num){
        resolve({a:4, b:"number"});
        }
        else reject();
    });
    
    promise.then( res => console.log('resolve: ',res))
    .catch(err =>console.log('reject') )
   }, [])

    return (
        <div>
            <h1>useing useEffect Hooks</h1>
           <p>PromiseLesson Consola Bax</p>
        </div>
    )
}



export default PromiseLesson;
