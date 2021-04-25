export interface IState {
    name?: string | null;
    sname?: string| null;
    makeStr: (str:string) => string[];
    makeT: <T>(str:T) => T[]; 
    makeTS: <T , S>(inx: T, str:S) => T[] | S[]; 
    makeFn: <T,S = any>() => (T | S)[]
    makeObj:<T extends {name:string,sname:string}>(obj:T)=> T
}




///////////////////////////////////////////////////////////////////////////////////////////

function lastFn<T>(arg: T[]){
    return arg;
}

const last = <T>(arg: T[]) => {
    return arg[length-2]
}
// independed type ln,ls on  return last type return primitve type 
// independed type lnF,lnFns on  return lastFn type  in here lastFn return array

const ln = last([1,2,3]); 
// last:<number>( args: number [] )=> number;

const ls = last(['a','b','c']); //ls: string

const lnF = lastFn([1,2,3,'a']); //lnF : (number | string)[] 
// function lastFn<number | string>( args: (number | string)[] ): (number | string)[]

const lnFns = lastFn<number>([1,2,3,4]); 

/*function lastFn<number>( args: number [] ):number[] 
=> <number>lastFn  T= number  args:number[] 
*/

const show = <T , S>(args:T , name: S): T | S =>{
    //A: T | S => A: number | string
    if(args){  return args  }
    else  return name 
   
}

let A = show(1,'a');//A: number | string

let B = show<number, number | string>(1,'a');//name types will be  number | string

let C = show<number[] | string[],  string | string[]>([1],'a');
//args types will be  number[] | string[] but name type's  string | string[]

///////////////////////////////////////////////////////////////////////////////////////////

const makeArr = <T, S = string>(x: T, y: S): (T | S)[] => { 
    return [x]
 }
let a = makeArr<number | null >(1,'a') ;
/*/
   :(T | S)[] == :T[] | S[]
   if makeArr<number | null >(1,'a') if parametr second type don't sent 
   that is time S = string for   secondly type
/*/

///////////////////////////////////////////////////////////////////////////////////////////

const makeFullName1 = ( obj: {name: string, sname: string} ):{} => {

    return {
        ...obj,
        setFullName: `${obj.name} ${obj.sname}`
    }

}

const obja = makeFullName1( {name: 'a', sname: 'b '});

////////////////////////////////////////////////////////////////////////////////////////
const makeFullName2 = <T extends {name: string, sname: string}>( obj: T ) => {

    return {
        ...obj,
        setFullName: `${obj.name} ${obj.sname}`
    }

}

const obj1 = makeFullName2( {name: 'a', sname: 'b'} );
//obj1.(name,sname,setFulName)

const obj2 = makeFullName2( {name: 'a', sname: 'b' , age: 5} );
//obj2.(name,sname,age,setFulName)
//obj2.year = 1995 new property couldn't add obj2 or obj1

const makeFullName3 = <T extends {name: string, sname: string}>( obj: T ) => {

    return {
        ...obj,
        setFullName: `${obj.name} ${obj.sname}`
    }

}
//if T extends which object that is time you ad all extends object properts

const obj4 = makeFullName3<{name: string, sname: string, year:number}>( {name: 'a', sname: 'b' , year: 1996} );//age: 7 do't write beacuse T typet define T:{name: string, sname: string, year:number}

////////////////////////////////////////////////////////////////////////////////////////////////////

const makeFullName5 = <T extends {name: string, sname: string, year:number}>( obj: T ) => {

    return {
        ...obj,
        setFullName: `${obj.name} ${obj.sname}`
    }

}
//if T extends which object that is time you ad all extends object properts

const obj5 = makeFullName5<{name: string, sname: string, year:number}>( {name: 'a', sname: 'b' , year: 1996} );

/////////////////////////////////////////////////////////////////////////////////////////////////

interface Tab <T>{
    name: string;
    sname: string;
    data: T
}

type TabA = Tab<number>;
type TabB = Tab<string>;
