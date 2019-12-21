import editMe from "../../assets/pencil.svg";
import deleteMe from "../../assets/delete.svg";

const ANNOUNCEMENT_DATA = [
	{
		id: 1,
		title: "Menu Change",
		announcment:
			"We have decided to change our salad from a caesar salad to a house salad.",
		update: editMe,
		delete: deleteMe,
	},
	{
		id: 2,
		title: "Weather Update",
		announcment:
			"It looks like it will rain during the reception, so we will move it inside.",
		update: editMe,
		delete: deleteMe,
	},
	{
		id: 3,
		title: "Bartender",
		announcment:
			"Our bartender had something come up, so no open bar. Sorry everyone. BYOB!",
		update: editMe,
		delete: deleteMe,
	},
];

export default ANNOUNCEMENT_DATA;
