import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducre.js";

const initailState = {
	transactions: [
		{ id: 2, text: "Salary", amount: 500 },
		{ id: 1, text: "Movies", amount: -300 },
		{ id: 3, text: "Petrol", amount: -100 },
		{ id: 4, text: "Muumy e Didha ", amount: 40 },
	],
};

export const GlobalContext = createContext(initailState);

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initailState);
	console.log(dispatch, state);

	const deleteTransaction = (id) => {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	};
	const addTransaction = (transaction) => {
		dispatch({
			type: "ADD",
			payload: transaction,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
