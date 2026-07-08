window.TRIP_PAGE_DATA = {
	contact: {
		title: "Contact Information",
		groups: [
			{
				title: "Group 1: Ho Chi Minh",
				guideTitle: "Local tour guide:",
				guides: [
					{ label: "Bus 1", name: "Mr. Pham Quoc Bao - 0396.160.729" },
					{ label: "Bus 2", name: "Mr. Nguyen Kieu Hung - 0849.809.952" },
					{ label: "Bus 3", name: "Mr. Nguyen Ba Trong - 0839.099.319" },
					{ label: "Bus 4", name: "Mr. Le Viet Huy - 085.744.3322" },
				],
				supportTitle: "Company staff supporting the group:",
				supporters: [
					"Lam Tinh Hao - 0938.351.623",
					"Ta Giai Quan - 0833.727.823",
				],
			},
			{
				title: "Group 2: Binh Duong",
				guideTitle: "Local tour guide:",
				guides: [
					{ label: "Bus 5", name: "Mr. Dang Quoc Thanh Long - 0989.838.762" },
					{ label: "Bus 6", name: "Mr. Nguyen Van Cuong - 0908.143.765" },
					{ label: "Bus 7", name: "Mr. Nguyen Hoa Tuan Duy - 0395.074.537" },
					{ label: "Bus 8", name: "Mr. Vu Duc Cam - 0909.230.130" },
					{ label: "Bus 8", name: "Mr. Nguyen Trong Tai - 0366.143.350" },
				],
				supportTitle: "Company staff supporting the group:",
				supporters: [
					"Lam Tinh Hao - 0938.351.623",
					"Ta Giai Quan - 0833.727.823",
				],
			},
		],
	},
	info: {
		title: "General Information",
		menuTitle: "Table of Contents",
		sections: [
			{
				id: "infoMain1",
				title: "Accommodation, Amenities, and Services",
				menuTitle: "Hotel and Facilities",
				subsections: [
					{
						id: "info1",
						title: "Hotel Information",
						type: "hotel",
						hotel: {
							label: "Hotel",
							name: "CENTARA MIRAGE RESORT MUI NE",
							stars: 5,
							address: "Huynh Thuc Khang, Quarter 4, Mui Ne, Lam Dong",
							phone: "Tel: (+84) 252 2222 202",
						},
						image: {
							src: "assets/img/khachsan-01.jpg",
							alt: "khách sạn tại Centara Mirage Resort Mũi Né",
						},
						image2: {
							src: "assets/img/khachsan-02.jpg",
							alt: "khách sạn tại Centara Mirage Resort Mũi Né",
						},
					},
					{
						id: "info3",
						title: "Facilities",
						type: "list",
						image: {
							src: "assets/img/facilities.jpg",
							alt: "Facilities at Centara Mirage Resort Mui Ne",
						},
						items: [
							"01 free breakfast buffet at <b>Mundo Restaurant (06:00 - 10:30)</b>. <b style='color: red'>Please bring your room key for check-in.</b>",
							'Free Wi-Fi without password. Please select the Wi-Fi network named <b>"Centara Mirage Resort"</b>.',
							"Complimentary in-room setup: 02 bottles of water per day, tea, coffee sachets, and personal hygiene amenities.",
						],
					},
					{
						id: "info4",
						title: "Room Amenities",
						type: "list",
						items: [
							"Please do not smoke inside rooms or indoor areas.",
							'Strong-smelling food such as durian, seafood, shrimp paste, etc. is strictly prohibited in rooms. <i>A VND 5,000,000 cleaning fee will be applied for deep cleaning afterward.</i>',
							"Please contact Reception by dialing 0 from the in-room phone or calling 02522222202. Guests may also download the Centara Mirage Resort Mui Ne app, register, and scan the QR code in the room for convenient information lookup during the stay.",
							'Alternatively, contact the resort via Zalo at the provided phone number for convenient buggy service requests: 0857485485.',
							'<b style="color: red">(Note: Guests will be required to compensate for any lost or damaged equipment.)</b>',
						],
					},
				],
			},
			{
				id: "infoMain2",
				title: "Belongings",
				type: "list",
				items: [
					"Light, comfortable clothes; low-soled shoes for easy movement and activities; swimwear, sunscreen, sunglasses, hat or umbrella, etc.",
					"Camera/video camera and personal medicine, if any.",
				],
			},
			{
				id: "infoMain3",
				title: "Sightseeing Notes",
				type: "list",
				items: [
					"Please gather according to the instructions of the tour guide or group leader.",
					"Please review service details carefully before using them.",
				],
				afterHtml:
					'<p class="fw-bold">Any costs not included in the program are at guests&apos; own expense.</p>',
			},
			{
				id: "infoMain4",
				title: "Important Notices",
				type: "list",
				items: [
					"<b>As there are many children in the group, families traveling with children are kindly requested to follow the announced service standards to help the group use services smoothly.</b>",
					'<b style="color: red">Parents should always keep a close eye on their children, especially at swimming pools, crowded play areas, and when getting on and off the coach during transfers.</b>',
					"<b>After check-in, please check whether all equipment and items match the in-room inventory list.</b> Please contact Reception or the tour guide if anything is missing.",
					"<b>The public beach is located across the street. Swimming or beach activities depend on seasonal wind and tide conditions. Guests may use the buggy to reach the resort front gate, then cross at the pedestrian crossing to the beach. For the return trip, please wait at the buggy station and notify Security for assistance.</b>",
					"<b>Regarding buggy service: during peak hours, buggies operate at full capacity and may be delayed. For a smoother experience, please request a buggy 15 minutes in advance by dialing 0 from the in-room phone and stating your destination. Please wait outside your room for pickup. Buggy operation prioritizes resort safety and internal regulations, so we appreciate your understanding.</b>",
				],
			},
			{
				id: "infoMain5",
				title: "Restaurant Information",
				type: "restaurants",
				groups: [
					{
						title: "Group 1: Ho Chi Minh",
						meals: [
							{
								label: "Lunch - Day 1",
								name: "Lunch Buffet at Asteria Resort Mui Ne",
								address: "08 Xuan Thuy Street, Quarter 5, Mui Ne, Lam Dong.",
							},
							{
								label: "Lunch - Day 2",
								name: "Hong Vinh Seafood Restaurant",
								address: "126 Nguyen Dinh Chieu, Quarter 2, Mui Ne, Lam Dong",
							},
						],
					},
					{
						title: "Group 2: Binh Duong",
						meals: [
							{
								label: "Lunch - Day 1",
								name: "Lunch Buffet at Asteria Resort Mui Ne",
								address: "08 Xuan Thuy Street, Quarter 5, Mui Ne, Lam Dong.",
							},
							{
								label: "Lunch - Day 2",
								name: "Hong Vinh Seafood Restaurant",
								address: "126 Nguyen Dinh Chieu, Quarter 2, Mui Ne, Lam Dong",
							},
						],
					},
				],
			},
		],
	},
	organize: {
		title: "Organizer",
		logos: [
			{
				src: "assets/img/logo-1.jpg",
				alt: "Tagger Travel logo",
			},
		],
	},
	footer: {
		title: "Operated by TAGGER TRAVEL CO., LTD. - HO CHI MINH CITY BRANCH",
		contactTitle: "Contact Information",
		addressLabel: "Address",
		address: "HBT Tower, 458 Hai Ba Trung Street, Tan Dinh Ward, Ho Chi Minh City",
		hotline: "02838481390",
		email: "sgn.obvn@wakuwaku-vn.com",
		linksTitle: "Quick Links",
		links: [
			{
				label: "Tagger Travel Homepage",
				href: "https://tagger-travel.com/vi/",
			},
		],
		copyright: "&copy; Copyright by TAGGER TRAVEL Co., Ltd.",
	},
};
