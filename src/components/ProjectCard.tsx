import React from "react";
import useMedia from "use-media";
import useDarkMode from "use-dark-mode";
import {project} from "../types/module";

const ProjectCard: React.FC<project> = (props: project) => {
    

    const isWide: boolean = useMedia({ minWidth: 700 });
    const darkMode = useDarkMode();
    async function shareMenu(): Promise<void> {
        try {
            //@ts-ignore
            if (navigator.share) {
                //@ts-ignore
                await navigator.share({
                    title: props.title,
                    text: "Check out " + props.title,
                    url: props.github&&props.github,
                })
            }

        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div style={{backgroundColor:darkMode.value?"#1e1e1e":"#fff",boxShadow:darkMode.value?" 0px 1px 3px 0px rgba(0,0,0,1), 0px 1px 1px 0px rgba(0,0,0,1), 0px 2px 1px -1px rgba(0,0,0,1)":" 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"}} className="card-root">
            <button type="button" tabIndex={0} onClick={() => props.image.website?window.location.href = props.image.website:window.location.href=props.github?props.github:""} className={["card-action-area-root", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                <div style={props.image&&{backgroundImage:`url("/${props.image.url}")`,height:props.image.height,backgroundSize:props.image.backgroundSize?props.image.backgroundSize:"auto"}} title={props.image&&props.image.title} className="card-media-root" />
                <div className="card-content-root">
                    <h2>{props.title}</h2>
                    <p style={{marginBottom:"0px"}}>{props.content}</p>
                </div>
            </button>
         {  <div style={{borderTop:darkMode.value?"solid 1px white":"solid 1px black"}} className="card-actions-root">
                {
                    !isWide && <button onClick={shareMenu} type="button" tabIndex={0} className={["card-action-button", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                        SHARE
                        </button>
                }
             
            </div>
         }
        </div>

    )
}
export default ProjectCard;

