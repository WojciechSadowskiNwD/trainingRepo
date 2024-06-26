import React from "react";
// używam hooków useParams, useLocation żeby móc w v.6 skorzystać z alternatywy dla props-> obj.match (chcę uzyskać dostęp do parametrów trasy, używam więc hooków )
import { Link, useParams, useLocation } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {

	// do uzyskania parametrów trasy
	const {id} = useParams();
	console.log('Id: ' + id);

	 // do uzyskania informacji o lokalizacji
	 const location = useLocation();
	 console.log(location);

	return (
		<>
			<h2>Strona produktu: {id}</h2>
			<br/>
			<Product id={id}/>
			<p>* Jestem obecnie w pliku: {location.pathname}</p>
			<Link to="/products">Powrót do listy produktów</Link>
		</>
	);
};

export default ProductPage;
