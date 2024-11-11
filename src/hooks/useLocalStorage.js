import { useState } from "react";

const useLocalStorage = (key, invalideValue) => {
     const [state, setState ] = useState(() => {
        try{
            let item = localStorage.getItem(key)
        
            return item 
            ? JSON.parse(item )
            : invalideValue;
        } catch(err) {
             console.log(err);
             return invalideValue;
        }
        
     }); 

     const setItem = (value) => {
        // TODO: ADD SUPPORT FOR FUNCTION 
        try{
            
            // save localstorage
            localStorage.setItem(key, JSON.stringify(value) )
            
            // save to state
            setState(value);

        }catch(err){
            console.log(err);
        }; 
     };

     return([
        state,
        setItem 
     ]);
}; 

export default useLocalStorage; 