/** @format */
import {ReactNode} from "react";
import "./index.scss";
import {X} from "lucide-react";
import {alertType} from "../../types";

interface IProps {
	type: alertType;
	title: string;
	icon: ReactNode;
	description?: string;
	children?: ReactNode;
}

const Alert = ({type, title, icon, description, children}: IProps) => {
	return (
		<div className={type}>
			<div className='alert-header'>
				<div className='title'>
					<span>{icon}</span>
					<h1>{title}</h1>
				</div>
				<X
					className='close'
					size={25}
				/>
			</div>
			{children ? children : <p>{description}</p>}
		</div>
	);
};

export default Alert;
