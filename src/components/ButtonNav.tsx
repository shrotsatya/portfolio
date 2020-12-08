import React, {useEffect,useRef} from "react";
const buttonContainer = {
    height:"62px",
    width:"62px",
    backgroundColor : "#20232a",
    color: "#61dafb",
    cursor:"pointer",
    right:"12px",
    zIndex:3,
    borderRadius:"50%",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    position  :"fixed" ,
    bottom:"30px"

} as React.CSSProperties;
const leftArrow = {transform:" translate(2px, -4px) rotate(180deg)",transition:"-webkit-transform 0.2s ease,transform 0.2s ease"}as React.CSSProperties;
const rightArrow = {transform:" translate(2px, 4px) ",transition:"-webkit-transform 0.2s ease,transform 0.2s ease"} as React.CSSProperties;
const leftCross = {transform: "translate(2px, 8px) rotate(180deg)",transition: "-webkit-transform 0.2s ease 0s, transform 0.2s ease 0s"} as React.CSSProperties;
const rightCross = {transform: "translate(2px, -8px)", transition: "-webkit-transform 0.2s ease 0s, transform 0.2s ease 0s"} as React.CSSProperties;


export const ButtonNav = (props:{className:string,navigation:boolean,showNavigation:React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    const button : React.MutableRefObject<HTMLDivElement | null | undefined> = useRef();
    const {navigation,showNavigation} =props;
   
    useEffect(()=>{
        const handleClick = (e:{target:HTMLInputElement}) : void => {
            const buttonNode:Node|HTMLElement|undefined|null = button.current;
            if(buttonNode!==undefined&&buttonNode!=null)
            if( buttonNode.contains(e.target) ){
               showNavigation(!navigation)
            }
        }
        document.addEventListener('click',handleClick as ()=>void);
        return ()=> document.removeEventListener('click',handleClick as ()=>void);
    });
   

    return (
    <div className={props.className} ref={button as string | ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined } style={buttonContainer}>
        <div style={{paddingLeft:"20px",paddingRight:"20px",marginLeft:"auto",marginRight:"auto",display:"flex"}}>
            <div style={{height:"60px",overflow:"hidden",alignItems:"flex-start",display:"flex",boxAlign:"start",flexDirection:"row"}}>
                <div style={{width:"20px",height:"20px",display:"flex",alignSelf:"center",flexDirection:"column"}}>
                    <svg viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="15" height="15" style={navigation?leftCross:leftArrow}><g transform="translate(904.92214,-879.1482)"><path d="
                    m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
          -174.68583 0.6895,0 26.281,25.03215 56.8701,
          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
          -104.0616 -231.873,-231.248 z
        " fill="currentColor"></path></g></svg>
        <svg viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="15" height="15" style={navigation?rightCross:rightArrow}><g transform="translate(904.92214,-879.1482)"><path d="
          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
          -174.68583 0.6895,0 26.281,25.03215 56.8701,
          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
          -104.0616 -231.873,-231.248 z
        " fill="currentColor"></path></g></svg>
                </div>
            </div>
        </div>
    </div>
    )

}
