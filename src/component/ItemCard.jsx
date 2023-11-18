const ItemCard = (props) => {


    return (
        <>
       
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidedn h-100 shadow text-center">
                    <img src={props.url} className="card-img-top" alt="..." style={{width:""}} />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{props.title}</strong></h5>
                        <p className="card-text">{props.descripcion}</p>
                        <p className="card-text sku"><strong>SKU:</strong> {props.sku}</p>
                        <p className="card-text sku"><strong>Disponible:</strong> {props.disponible}</p>
                        <h4 >${props.precio}</h4>
                   
                        <a href="#" className="btn btn-primary">Agregar Carrito</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard