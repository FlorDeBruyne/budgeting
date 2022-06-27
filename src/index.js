import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Chart from "./routes/Charts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} >
				<Route path='/Contact' element={<Contact />} />
				<Route path='/Charts' element={<Chart />} />
				<Route path='/Login' element={<Login />} />
				<Route
					path='*'
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
				</Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{
	/* <React.StrictMode></React.StrictMode> */
}
// this should be around BrowerRouter (cursus not doc)
