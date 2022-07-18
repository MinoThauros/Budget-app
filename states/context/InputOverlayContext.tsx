import { createContext, useState } from "react";

export const OverlayContext=createContext({
    visible:false as boolean,
    toogleOverlay:()=>{}
})

const OverlayToggleContextProvider=({children}:any):JSX.Element=>{
    const [overlayVisibility,setOverlayVisiblity]=useState(false);

    //binding the function
    const ToggleOverlay=():void=>{
        setOverlayVisiblity(!overlayVisibility);
        console.log('toggled Overlay')
    };
    const context={
        visible:overlayVisibility,
        toogleOverlay:ToggleOverlay,
    };
    //the provider is accessed through the exported value
    return <OverlayContext.Provider value={context}></OverlayContext.Provider>
};

export default OverlayToggleContextProvider