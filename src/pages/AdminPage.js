import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AdminPage = () => {
	// zmienna określa czy użytkownik jest uwieżytelniony, domyślnie nie jest
	const permission = true;

    // Navigate to odsyłacz do strony wskazanej
    if(!permission) {
        return <Navigate to="/login" replace/>
    }

	return (
		<>
			<h1>Panel Admina - zalogowano!</h1>
		</>
	);
};

export default AdminPage;
