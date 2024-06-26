import React from "react";
import {useParams} from 'react-router-dom';

const Product = (props) => {
    const {id} = useParams();
	return (
		<article className="article">
            <h1>props: {props.id}</h1>
            <br/>
			<h3>Nazwa przekazana za pomocą hooka useParams: {id}</h3>
			<br />
		</article>
	);
};

export default Product;
