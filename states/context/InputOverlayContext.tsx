import { createContext, useState } from "react";

export const OverlayContext=createContext({
    visible:false as boolean,
    toogleOverlay:():void=>{}
})

const OverlayToggleContextProvider=({children}:any):JSX.Element=>{
    const [overlayVisibility,setOverlayVisiblity]=useState(false as boolean);

    //binding the function
    const ToggleOverlay=():void=>{
        setOverlayVisiblity(!overlayVisibility);
        console.log('toggled overlay')
    };
    const context={
        visible:overlayVisibility,
        toogleOverlay:ToggleOverlay,
    };
    //the provider is accessed through the exported value
    return <OverlayContext.Provider value={context}>{children}</OverlayContext.Provider>
};

export default OverlayToggleContextProvider