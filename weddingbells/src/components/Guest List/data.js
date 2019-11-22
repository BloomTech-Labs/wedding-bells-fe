import editMe from "../../assets/pencil.svg";
import deleteMe from "../../assets/delete.svg";

const GUEST_DATA = [
	{
		id: 1,
		name: "Robert Pedersen",
		email: "contact@robertpedersen.dev",
		going: "Yes",
		responded: "Yes",
		plusOne: "Yes",
		update: editMe,
		delete: deleteMe,
	},
	{
		id: 2,
		name: "Poly Goveia",
		email: "polyTheG@aol.com",
		going: "No",
		responded: "Yes",
		plusOne: "No",
		update: editMe,
		delete: deleteMe,
	},
	{
		id: 3,
		name: "Sammy Chang",
		email: "sammychang@sc.com",
		going: "Yes",
		responded: "No",
		plusOne: "No",
		update: editMe,
		delete: deleteMe,
	},
];

export default GUEST_DATA;
