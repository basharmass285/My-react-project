import { useState, useEffect } from "react";

export const useCurrentDate = () => {
	const [clock, setClock] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setClock(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return clock;
};