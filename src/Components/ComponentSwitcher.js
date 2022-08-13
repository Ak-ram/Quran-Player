import { AudioList } from "./AudioList";
import Reciter from "./Reciter";
import Remembrance from "./Remembrance";
const ComponentSwitcher = ({currentPath,menuList,appState})=>{
        switch(currentPath){
            case menuList[0]: return <AudioList appState={appState}/>;
            case menuList[1]: return <Remembrance appState={appState}/>;
            case menuList[2]: return <Reciter appState={appState}/>;
            case menuList[3]: return <h1>{currentPath}</h1>;
            case menuList[4]: return <h1>{currentPath}</h1>;
            default: return <AudioList appState={appState}/>
        }
    }
export default ComponentSwitcher;