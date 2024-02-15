import MenuItem from "../MenuItem/MenuItem";
import SubMenu from "../SubMenu/SubMenu";

const Layer = ({service, services}) => {
    if (!service.node) {
        return <MenuItem service={service}/>
    } else {
        return <SubMenu service={service} services={services}/>
    } 
}

export default Layer;