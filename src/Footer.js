import React from 'react';
import { useLocation } from 'react-router-dom'

const Footer = () => {
	const location = useLocation();

	return (
		<div>
			{
				location.pathname === '/' && (
				 <footer className="row center">
						all right reserved copy right by E-shop {new Date().getFullYear()} <br />
						<div>
						 <img  className="min-small" src="/e-shop.ico" alt="" />
						</div>
        </footer>
				)
			}
		</div>
	)
}

export default Footer
