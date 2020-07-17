import React from 'react';
import './Content.css';

export default function OtherContent() {
	// this component is just a placeholder for simulating
	// other content when tabs other than drivers are clicked
	return (
		<div className="Content d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-9 col-xl-10 p-0">
			<div className="LoadingSpinner spinner-border" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
