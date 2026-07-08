window.TRIP_PAGE_DATA = {
	contact: {
		title: "Thông tin liên hệ",
		groups: [
			{
				title: "Group 1: Hồ Chí Minh",
				guideTitle: "Hướng dẫn viên:",
				guides: [
					{ label: "Xe 1", name: "Phạm Quốc Bảo - 0396.160.729" },
					{ label: "Xe 2", name: "Nguyễn Kiều Hưng - 0849.809.952" },
					{ label: "Xe 3", name: "Nguyễn Bá Trọng - 0839.099.319" },
					{ label: "Xe 4", name: "Lê Viết Huy - 085.744.3322" },
				],
				supportTitle: "Nhân viên công ty hỗ trợ theo đoàn:",
				supporters: [
					"Lâm Tinh Hạo - 0938.351.623",
					"Tạ Giai Quân - 0833.727.823",
				],
			},
			{
				title: "Group 2: Bình Dương",
				guideTitle: "Hướng dẫn viên:",
				guides: [
					{ label: "Xe 5", name: "Đặng Quốc Thanh Long - 0989.838.762" },
					{ label: "Xe 6", name: "Nguyễn Văn Cường - 0908.143.765" },
					{ label: "Xe 7", name: "Nguyễn Hòa Tuấn Duy - 0395.074.537" },
					{ label: "Xe 8", name: "Vũ Đức Cảm - 0909.230.130" },
					{ label: "Xe 9", name: "Nguyễn Trọng Tài - 0366.143.350" },
				],
				supportTitle: "Nhân viên công ty hỗ trợ theo đoàn:",
				supporters: [
					"Lâm Tinh Hạo - 0938.351.623",
					"Tạ Giai Quân - 0833.727.823",
				],
			},
		],
	},
	info: {
		title: "Thông tin chung",
		menuTitle: "Mục lục",
		sections: [
			{
				id: "infoMain1",
				title: "Khách sạn, trang thiết bị",
				menuTitle: "Khách sạn, trang thiết bị",
				subsections: [
					{
						id: "info1",
						title: "Thông tin về khách sạn",
						type: "hotel",
						
						hotel: {
							label: "Khách sạn",
							name: "CENTARA MIRAGE RESORT MŨI NÉ",
							stars: 5,
							address: "Huỳnh Thúc Kháng, khu phố 4, Mũi Né, Lâm Đồng",
							phone: "Số điện thoại: (+84) 252 2222 202",
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
						title: "Trang thiết bị",
						type: "list",
						image: {
							src: "assets/img/facilities.jpg",
							alt: "Trang thiết bị tại Centara Mirage Resort Mũi Né",
						},
						items: [
							"01 bữa ăn sáng buffet tại <b>nhà hàng Mundo (06h00 - 10h30)</b>, <b style='color: red'>vui lòng mang theo thẻ phòng để thuận tiện cho việc check in.</b>",
							'Miễn phí wifi và không yêu cầu mật khẩu, <b>vui lòng chọn tên wifi "Centara Mirage Resort"</b>.',
							"Miễn phí trong phòng: 02 chai nước suối/ ngày, trà, cà phê gói, bộ vệ sinh cá nhân.",
						],
					},
					{
						id: "info4",
						title: "Tiện ích trong phòng",
						type: "list",
						items: [
							"Vui lòng không hút thuốc trong phòng và các không gian trong nhà.",
							'Nghiêm cấm mang các thức ăn nặng mùi (như sầu riêng, hải sản, mắm, ... ) vào phòng. <i>Phí phạt được áp dụng là 5,000,000 VND cho công tác làm sạch sâu sau đó.</i>',
							"Vui lòng liên hệ Lễ tân qua phím 0 trên điện thoại bàn tại mỗi phòng hoặc số hotline 02522222202. Ngoài ra, khách có thể tải ứng dụng Centara Mirage Resort Mũi Né đăng ký và sau đó quét mã QR đặt ở trong phòng để tiện cho quá trình tra cứu thông tin trong thời gian lưu trú.",
							'Hoặc liên hệ qua zalo của resort theo số điện thoại đính kèm để thuận tiện trong việc đặt xe điện 0857485485.',
							'<b style="color: red"><i>(Lưu ý: Bất kì mất mát hoặc hư hỏng thiết bị do khách hàng sẽ được yêu cầu bồi thường).</b></i>',
						],
					},
				],
			},
			{
				id: "infoMain2",
				title: "Trang bị cá nhân",
				type: "list",
				items: [
					"Trang phục thoáng mát, gọn nhẹ, nên mang giày đế thấp để tiện cho việc di chuyển, vui chơi, đồ bơi, kem chống nắng, kính mát, nón - dù, ...",
					"Máy ảnh/quay phim, thuốc đặc trị (nếu có)",
				],
			},
			{
				id: "infoMain3",
				title: "Lưu ý khi tham quan",
				type: "list",
				items: [
					"Vui lòng tập trung theo sự hướng dẫn của hướng dẫn viên/ trưởng đoàn.",
					"Tham khảo kỹ lưỡng các dịch vụ trước khi sử dụng.",
				],
				afterHtml:
					'<p class="fw-bold">Những chi phí không bao gồm trong chương trình, quý khách vui lòng tự túc thanh toán.</p>',
			},
			{
				id: "infoMain4",
				title: "Lưu ý quan trọng",
				type: "list",
				items: [
					"<b>Do số lượng các bé trong đoàn khá đông nên để thuận tiện cho việc sắp xếp và sử dụng dịch vụ của đoàn, các gia đình có em bé đi cùng vui lòng tuân thủ các tiêu chuẩn dịch vụ như chính sách đã thông báo.</b>",
					'<b style="color: red">Đặc biệt, ba mẹ luôn lưu tâm để ý đến các con đặc biệt là tắm hồ bơi, tại các khu vui chơi - đông người, khi lên xuống xe trong suốt quá trình di chuyển.</b>',
					"<b>Sau khi nhận phòng, vui lòng kiểm tra các thiết bị và vật dụng đã đúng với bản kê trong phòng hay chưa?</b> Vui lòng liên hệ với Lễ tân/HDV trong trường hợp bị thiếu.",
					"<b>Bãi biển công cộng nằm bên kia đường, tùy vào mùa gió và con nước sẽ quyết định có thể tắm/vui chơi được hay không? Quý khách sử dụng xe điện để di chuyển đến cổng trước của resort và băng qua lối dành cho người đi bộ để đến bãi biển. Khi về, chờ ở trạm xe điện và báo an ninh hỗ trợ điều xe.</b>",
					"<b>Về xe điện: vào những khung giờ cao điểm, xe điện hoạt động hết công suất nhưng vẫn có thể bị chậm trễ. Để thuận tiện cho quá trình trải nghiệm, quý khách vui lòng có kế hoạch gọi xe điện trước 15 phút bằng cách nhấn phím 0 trên điện thoại bàn và báo địa điểm cần đi. Vui lòng có mặt trước cửa phòng để đón xe, hoạt động của xe điện luôn ưu tiên tính an toàn và quy định nội khu resort nên mong quý khách cảm thông trong quá trình sử dụng.</b>",
				],
			},
			{
				id: "infoMain5",
				title: "Thông tin nhà hàng",
				type: "restaurants",
				groups: [
					{
						title: "Group 1: Hồ Chí Minh",
						meals: [
							{
								label: "Trưa ngày 01",
								name: "Buffet trưa tại Asteria resort Mũi Né",
								address: "08 Đường Xuân Thủy, Khu phố 5, Mũi Né, Lâm Đồng.",
							},
							{
								label: "Trưa ngày 02",
								name: "Nhà hàng Hải sản Hồng Vinh",
								address: "126 Nguyễn Đình Chiểu, khu phố 2, Mũi Né, Lâm Đồng",
							},
						],
					},
					{
						title: "Group 2: Bình Dương",
						meals: [
							{
								label: "Trưa ngày 01",
								name: "Buffet trưa tại <b>Asteria resort Mũi Né</b>",
								address: "08 Đường Xuân Thủy, Khu phố 5, Mũi Né, Lâm Đồng.",
							},
							{
								label: "Trưa ngày 02",
								name: "Nhà hàng Hải sản Hồng Vinh",
								address: "126 Nguyễn Đình Chiểu, khu phố 2, Mũi Né, Lâm Đồng",
							},
						],
					},
				],
			},
		],
	},
	organize: {
		title: "Đơn vị tổ chức",
		logos: [
			{
				src: "assets/img/logo-1.jpg",
				alt: "Logo Tagger Travel",
			},
		],
	},
	footer: {
		title: "Được thực hiện bởi CÔNG TY TNHH LỮ HÀNH TAGGER - CHI NHÁNH TP.HCM",
		contactTitle: "Thông tin liên hệ",
		address:
			"Tòa Nhà HBT Tower, 458 Hai Bà Trưng, Phường Tân Định, Hồ Chí Minh",
		hotline: "02838481390",
		email: "sgn.obvn@wakuwaku-vn.com",
		linksTitle: "Liên kết nhanh",
		links: [
			{
				label: "Trang chủ Tagger Travel",
				href: "https://tagger-travel.com/vi/",
			},
		],
		copyright: "© Copyright by TAGGER TRAVEL Co., Ltd.",
	},
};
