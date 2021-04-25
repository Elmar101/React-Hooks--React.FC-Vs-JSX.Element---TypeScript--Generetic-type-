import { Context, createContext, useContext } from "react";

export type FactoryFn<T> = () => T;
export type StoreDispatch<A> = (action: A) => void;
export type StoreContext<S, A> = Context<Store<S, A>>;
export type Store<S, A> = [S, StoreDispatch<A>];

export const createStoreContext = <S,A extends Object>( intialState:S ):StoreContext<S, A> => {
    return createContext< Store<S, A> >([intialState,(action: A) => undefined]);
}

export function useStoreContext<S, A extends Object>( context: StoreContext<S, A> ): Store<S, A>{
    return useContext(context);
}


