/** @format */

import {Ban, CheckCheck, Info, TriangleAlert} from "lucide-react";
import "./App.css";
import Alert from "./components/Alert/Alert";

function App() {
	return (
		<>
			<Alert
				title='Something went wrong'
				type={"error"}
				icon={<Ban size={20} />}
				children=<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed maiores
					quisquam nobis, cumque rerum odit <a href='/'>illum</a> esse sint nam
					ratione fuga earum suscipit id et fugiat vero qui accusantium. Esse?
				</p>
			/>
			<Alert
				title='Tips & Tricks'
				type={"warning"}
				icon={<TriangleAlert size={20} />}
				children=<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed maiores
					quisquam nobis, cumque rerum odit <a href='/'>illum</a> esse sint nam
					ratione fuga earum suscipit id et fugiat vero qui accusantium. Esse?
				</p>
			/>
			<Alert
				title='Note'
				type={"info"}
				icon={<Info size={20} />}
				children=<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed maiores
					quisquam nobis, cumque rerum odit <a href='/'>illum</a> esse sint nam
					ratione fuga earum suscipit id et fugiat vero qui accusantium. Esse?
				</p>
			/>
			<Alert
				title='Your order has been processed'
				type={"success"}
				icon={<CheckCheck size={20} />}
				children=<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed maiores
					quisquam nobis, cumque rerum odit <a href='/'>illum</a> esse sint nam
					ratione fuga earum suscipit id et fugiat vero qui accusantium. Esse?
				</p>
			/>
		</>
	);
}

export default App;
