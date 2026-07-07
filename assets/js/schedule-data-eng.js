window.TRIP_SCHEDULE_DATA = {
	title: "Trip Itinerary",
	selectorTitle: "Choose your group",
	gallery: [
				{
					src: "assets/img/1.jpg",
					alt: "Gallery Group 1 - Hình 1",
				},
				{
					src: "assets/img/2.jpg",
					alt: "Gallery Group 1 - Hình 2",
				},
				{
					src: "assets/img/3.jpg",
					alt: "Gallery Group 1 - Hình 3",
				},
				{
					src: "assets/img/4.jpg",
					alt: "Gallery Group 1 - Hình 4",
				},
				{
					src: "assets/img/5.jpg",
					alt: "Gallery Group 1 - Hình 5",
				},
				{
					src: "assets/img/6.jpg",
					alt: "Gallery Group 1 - Hình 6",
				},
			],
	// gallery: [
	// 	{ src: "assets/img/schedule-01.jpg", alt: "Gallery image 1" },
	// 	{ src: "assets/img/schedule-02.jpg", alt: "Gallery image 2" },
	// 	{ src: "assets/img/schedule-03.jpg", alt: "Gallery image 3" },
	// 	{ src: "assets/img/schedule-01(g2).jpg", alt: "Gallery image 4" },
	// 	{ src: "assets/img/schedule-02(g2).jpg", alt: "Gallery image 5" },
	// ],
	groups: [
		{
			id: "group1",
			label: "Group 1: Office Group",
			days: [
				{
					title: "Day 1 - 10/07/2026:",
					route: "Ho Chi Minh City - Mui Ne (Lam Dong)",
					image: "assets/img/schedule-01.jpg",
					imageAlt: "Day 1 itinerary - Group 1",
					events: [
						{
							time: "07:00",
							detail:
								"Guests gather at Kewpie Vietnam office (208 Co Bac, Cau Ong Lanh Ward, Ho Chi Minh City).",
						},

						{
							time: "07:15",
							detail:
								"Depart to Mui Ne. Enjoy a breakfast box on the coach.",
						},

						{
							time: "10:00",
							detail: "Arrive in Phan Thiet and <b>visit Dino Park</b>.",
						},
						{ time: "11:00", detail: "Continue to Mui Ne." },
						{
							time: "12:00",
							detail:
								"The group enjoys a buffet lunch at <b>Asteria Resort Mui Ne</b> (08 Xuan Thuy Street, Quarter 5, Mui Ne, Lam Dong).",
						},
						{
							time: "14:30",
							detail: "Transfer to Centara Mirage Resort Mui Ne.",
						},
						{
							time: "15:00",
							detail:
								"Guests complete check-in procedures at Lobby B on Vo Nguyen Giap Street (back gate) and rest.",
						},
						{
							time: "16:00",
							detail:
								"Guests join the <b>Team Building</b> program with exciting activities at the resort's <b>NH2 grass area</b>.",
						},
						{
							time: "17:30",
							detail: "End of the program. Guests rest and relax.",
						},
						{
							time: "18:45",
							detail:
								"The group enjoys <b>Gala Dinner</b> and joins fun games and special Kewpie-branded performances at the resort's <b>Oceano Ballroom</b>.",
						},
						{
							time: "21:30",
							detail: "End of the program. Overnight at the resort.",
						},
					],
				},
				{
					title: "Day 2 - 11/07/2026:",
					route: "Mui Ne (Lam Dong) - Ho Chi Minh City",
					image: "assets/img/schedule-01(g2).jpg",
					imageAlt: "Day 2 itinerary - Group 1",
					reversed: true,
					events: [
						{
							time: "06:00",
							detail:
								"Guests enjoy breakfast, then free time to relax and enjoy the resort.",
						},
						{
							time: "11:30",
							detail:
								"Guests complete check-out procedures at Lobby B on Vo Nguyen Giap Street (back gate).",
						},
						{
							time: "12:00",
							detail:
								"The group transfers to <b>Hong Vinh Seafood Restaurant</b> (126 Nguyen Dinh Chieu, Quarter 2, Mui Ne, Lam Dong).",
						},
						{ time: "12:30", detail: "Guests enjoy lunch." },
						{ time: "13:30", detail: "Depart back to Ho Chi Minh City." },
						{
							time: "17:00",
							detail:
								"Arrive at the original meeting point. End of program. Goodbye and see you again.",
						},
					],
				},
			],
		},
		{
			id: "group2",
			label: "Group 2: Factory Group",
			days: [
				{
					title: "Day 1 - 10/07/2026:",
					route: "Ho Chi Minh City - Mui Ne (Lam Dong)",
					image: "assets/img/schedule-01.jpg",
					imageAlt: "Day 1 itinerary - Group 2",
					events: [
						{
							time: "05:45",
							detail:
								"<b>Bus 05</b> pick  up as route: VSIP 1 gate - Le Hong Phong - Thu Khoa Huan - Chau Thoi - Highway 51",
						},

						{
							time: "06:00",
							detail:
								"<b>Bus 06,07,08,09</b> : Guests gather at Kewpie Vietnam Factory (No. 11, VSIP II-A, Road No. 14, VSIP II-A Industrial Park, Vinh Tan Ward, Ho Chi Minh City).",
						},

						{
							time: "06:15",
							detail:
								"Depart to  Mui Ne. On the way, <b>Bus 07 pick up a small group on Dai Dang 3-way Intersection</b>. <p>Factory group enjoy a breakfast box on the coach.</p>",
						},


						{
							time: "10:00",
							detail: "Arrive in Phan Thiet and <b>visit Dino Park</b>.",
						},
						{ time: "11:00", detail: "Continue to Mui Ne." },
						{
							time: "12:00",
							detail:
								"The group enjoys a buffet lunch at <b>Asteria Resort Mui Ne</b> (08 Xuan Thuy Street, Quarter 5, Mui Ne, Lam Dong).",
						},
						{
							time: "14:30",
							detail: "Transfer to Centara Mirage Resort Mui Ne.",
						},
						{
							time: "15:00",
							detail:
								"Guests complete check-in procedures at Lobby B on Vo Nguyen Giap Street (back gate) and rest.",
						},
						{
							time: "16:00",
							detail:
								"Guests join the <b>Team Building</b> program with exciting activities at the resort's <b>NH2 grass area</b>.",
						},
						{
							time: "17:30",
							detail: "End of the program. Guests rest and relax.",
						},
						{
							time: "18:45",
							detail:
								"The group enjoys <b>Gala Dinner</b> and joins fun games and special Kewpie-branded performances at the resort's <b>Oceano Ballroom</b>.",
						},
						{
							time: "21:30",
							detail: "End of the program. Overnight at the resort.",
						},
					],
				},
				{
					title: "Day 2 - 11/07/2026:",
					route: "Mui Ne (Lam Dong) - Ho Chi Minh City",
					image: "assets/img/schedule-01(g2).jpg",
					imageAlt: "Day 2 itinerary - Group 2",
					reversed: true,
					events: [
						{
							time: "06:00",
							detail:
								"Guests enjoy breakfast, then free time to relax and enjoy the resort.",
						},
						{
							time: "11:30",
							detail:
								"Guests complete check-out procedures at Lobby B on Vo Nguyen Giap Street (back gate).",
						},
						{
							time: "12:00",
							detail:
								"The group transfers to <b>Hong Vinh Seafood Restaurant</b> (126 Nguyen Dinh Chieu, Quarter 2, Mui Ne, Lam Dong).",
						},
						{ time: "12:30", detail: "Guests enjoy lunch." },
						{ time: "13:30", detail: "Depart back to Ho Chi Minh City." },
						{
							time: "18:00",
							detail:
								"Arrive at the original meeting point. End of program. Goodbye and see you again.",
						},
					],
				},
			],
		},
	],
};
