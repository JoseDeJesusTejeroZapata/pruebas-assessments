import { useParams } from "react-router-dom";


export const AccountsView = () => {

	const params = useParams();

  return (
	<div>
		<h1>AccountsView</h1>
		<h2>{ params.status }</h2>
	</div>
  )
}
