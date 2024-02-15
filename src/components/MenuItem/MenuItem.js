import Layer from "../Layer/Layer";

const MenuItem = ({service}) => {
    
    if (service.node) {
        return <Layer service={service}/>
    }

    return (
        <li className="menuItem">{service.name} - <span className="price">({service.price})</span></li>
    )
}

export default MenuItem;