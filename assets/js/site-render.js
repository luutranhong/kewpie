(function () {
	const data = window.TRIP_PAGE_DATA;

	if (!data) {
		return;
	}

	const createElement = (tag, className, html) => {
		const element = document.createElement(tag);

		if (className) {
			element.className = className;
		}

		if (html !== undefined) {
			element.innerHTML = html;
		}

		return element;
	};

	const createIcon = (symbolId, className) => {
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
		svg.setAttribute("class", className);
		use.setAttribute("href", `#${symbolId}`);
		use.setAttribute("xlink:href", `#${symbolId}`);
		svg.append(use);
		return svg;
	};

	const createTitleRow = (title, titleClass) => {
		const row = createElement("div", "row py-5 justify-content-center");
		row.append(createElement("h2", `${titleClass} text-center`, title));
		return row;
	};

	const createList = (items) => {
		const list = document.createElement("ul");

	items.forEach((item) => {
			const isNoteItem = item.includes("<b") && (item.includes("(L") || item.includes("(Note:"));
			const li = createElement("li", isNoteItem ? "info-note-item" : "", item);
			list.append(li);
		});

		return list;
	};

	const renderContact = () => {
		const root = document.querySelector("[data-contact-root]");

		if (!root || !data.contact) {
			return;
		}

		const container = createElement("div", "container");
		container.append(createTitleRow(data.contact.title, "intro-title-holder"));

		const row = createElement("div", "row py-3 justify-content-center gap-5");

		data.contact.groups.forEach((group) => {
			const col = createElement("div", "col-12 col-lg-4");
			col.append(
				createElement(
					"h2",
					"fw-bold fs-4 text-uppercase bg-blue text-white py-1 px-3 w-fit-content rounded-pill",
					group.title,
				),
			);

			const guideBlock = createElement("div", "mt-4 fw-bold", group.guideTitle);
			const guides = createElement("ul", "mt-1 fw-normal");
			group.guides.forEach((guide) => {
				guides.append(createElement("li", "mt-2", `<b>${guide.label}</b>: ${guide.name}`));
			});
			guideBlock.append(guides);
			col.append(guideBlock, document.createElement("hr"));

			const supportBlock = createElement("div", "mt-4 fw-bold", group.supportTitle);
			const supporters = createElement("ul", "mt-1 fw-normal");
			group.supporters.forEach((supporter) => {
				supporters.append(createElement("li", "mt-2", supporter));
			});
			supportBlock.append(supporters);
			col.append(supportBlock);
			row.append(col);
		});

		container.append(row);
		root.append(container);
	};

	const createMenuItem = (section) => {
		const block = createElement("div", "ps-2 my-4");

		if (section.subsections) {
			const heading = createElement("h4", "fs-6 fw-bold");
			const link = createElement("a", "", section.menuTitle || section.title);
			link.href = `#${section.id}`;
			heading.append(link);
			block.append(heading);

			const list = document.createElement("ul");
			section.subsections.forEach((subsection) => {
				const li = document.createElement("li");
				const link = createElement("a", "", subsection.title);
				link.href = `#${subsection.id}`;
				li.append(link);
				list.append(li);
			});
			block.append(list);
			return block;
		}

		const heading = createElement("h4", "fs-6 fw-bold");
		const link = createElement("a", "", ` ${section.title} `);
		link.href = `#${section.id}`;
		heading.append(link);
		block.append(heading);
		return block;
	};

	const createHotel = (subsection) => {
    const wrap = createElement("div", "px-4");
    const card = createElement(
        "div",
        "bg-blue bg-opacity-75 p-4 rounded-4 text-center text-white mx-lg-5",
    );
    
    // 1. Dựng nội dung cho khung thông tin (card) trước
    card.append(createElement("span", "text-uppercase fs-6", subsection.hotel.label));
    card.append(createElement("h4", "fw-bold fs-4", subsection.hotel.name));

    const stars = createElement("span", "d-flex fill-yellow justify-content-center");
    for (let i = 0; i < subsection.hotel.stars; i += 1) {
        stars.append(createIcon("star", "icon icon-star"));
    }
    card.append(stars);

    const meta = createElement("div", "d-flex flex-column align-items-center mt-2");
    const address = createElement("div", "d-flex align-items-center mb-1");
    const pin = createIcon("pin", "icon icon-pin me-2");
    pin.setAttribute("style", "fill: #fff; width: 16px; height: 16px;");
    address.append(pin);
    address.append(createElement("p", "mb-0", subsection.hotel.address));
    meta.append(address);
    meta.append(createElement("div", "", `<span>${subsection.hotel.phone}</span>`));
    card.append(meta);
    
    // 2. Thêm khung thông tin (card) vào wrap ĐẦU TIÊN để nó hiển thị ở trên
    wrap.append(card);

    // 3. Xử lý hình ảnh và thêm vào wrap SAU (để nó hiển thị bên dưới khung xanh)
    // Cập nhật để hỗ trợ hiển thị 2 tấm hình (image và image2)
    if (subsection.image || subsection.image2) { 
        // Thêm thẻ bọc ngoài dùng d-flex xếp dọc (flex-column) và có khoảng cách (gap-3)
        const imageWrap = createElement("div", "mt-3 d-flex flex-column gap-3");

        // Xử lý tấm hình thứ 1
        if (subsection.image) {
            const image = document.createElement("img");
            image.src = subsection.image.src;
            image.alt = subsection.image.alt || subsection.hotel.name;
            image.className = "img-fluid rounded-4";
            imageWrap.append(image);
        }

        // Xử lý tấm hình thứ 2 (nằm dưới)
        if (subsection.image2) {
            const image2 = document.createElement("img");
            image2.src = subsection.image2.src;
            image2.alt = subsection.image2.alt || subsection.hotel.name;
            image2.className = "img-fluid rounded-4";
            imageWrap.append(image2);
        }

        wrap.append(imageWrap);
    }

    return wrap;
};

const createSubsection = (subsection) => {
    const wrap = createElement("div", "pt-5");
    wrap.id = subsection.id;
    wrap.append(createElement("h4", "fs-5 fw-bold sub-counter", subsection.title));

    if (subsection.type === "hotel") {
        wrap.append(createHotel(subsection));
        return wrap;
    }

    const content = createElement("div", "px-4");
    content.append(createList(subsection.items || []));

    if (subsection.image) {
        const image = document.createElement("img");
        image.src = subsection.image.src;
        image.alt = subsection.image.alt || subsection.title;
        image.className = "img-fluid rounded-4 mt-3";
        content.append(image);
    }

    wrap.append(content);
    return wrap;
};

	const createPlainSection = (section) => {
		const content = createElement("div", "px-3 px-lg-4 py-3 border-start border-2");
		content.append(createList(section.items || []));

		if (section.afterHtml) {
			content.append(createElement("div", "", section.afterHtml));
		}

		return content;
	};

	const createRestaurants = (section) => {
		const row = createElement("div", "row");

		section.groups.forEach((group) => {
			const col = createElement("div", "col-12 col-lg-6");
			col.append(createElement("h4", "fw-bold fs-3", group.title));

			const content = createElement("div", "px-3 px-lg-4 py-3 border-start border-2");
			const list = document.createElement("ul");
			group.meals.forEach((meal) => {
				const item = document.createElement("li");
				const label = createElement(
					"span",
					"bg-blue rounded-pill px-2 py-1 text-white text-uppercase fw-bold",
					meal.label,
				);
				label.style.fontSize = "0.8rem";
				item.append(label);
				item.append(
					createElement(
						"div",
						"mt-2",
						`<h6 class="fs-5 fw-bold">${meal.name}</h6><p>${meal.address}</p>`,
					),
				);
				list.append(item);
			});
			content.append(list);
			col.append(content);
			row.append(col);
		});

		return row;
	};

	const createInfoSection = (section) => {
		const sectionElement = document.createElement("section");
		sectionElement.id = section.id;
		sectionElement.className = section.id === "infoMain1" ? "" : "mt-5";
		sectionElement.append(createElement("h3", "fw-bold fs-3 counter", section.title));

		if (section.subsections) {
			const content = createElement("div", "px-3 px-lg-4 py-3 border-start border-2");
			section.subsections.forEach((subsection) => content.append(createSubsection(subsection)));
			sectionElement.append(content);
			return sectionElement;
		}

		if (section.type === "restaurants") {
			sectionElement.append(createRestaurants(section));
			return sectionElement;
		}

		sectionElement.append(createPlainSection(section));
		return sectionElement;
	};

	const renderInfo = () => {
		const root = document.querySelector("[data-info-root]");

		if (!root || !data.info) {
			return;
		}

		root.append(createTitleRow(data.info.title, "special-points-title-holder"));

		const container = createElement("div", "container");
		const row = createElement("div", "row");
		const sidebar = createElement("div", "col-lg-3");
		const sticky = createElement("div", "sticky-top d-none d-lg-block");
		sticky.style.top = "5rem";
		sticky.append(createElement("h3", "fw-bold text-uppercase", data.info.menuTitle));
		data.info.sections.forEach((section) => sticky.append(createMenuItem(section)));
		sidebar.append(sticky);

		const main = createElement("div", "col-12 col-lg-9");
		data.info.sections.forEach((section) => main.append(createInfoSection(section)));

		row.append(sidebar, main);
		container.append(row);
		root.append(container);
	};

	const renderOrganize = () => {
		const root = document.querySelector("[data-organize-root]");

		if (!root || !data.organize) {
			return;
		}

		const container = createElement("div", "container");
		container.append(createTitleRow(data.organize.title, "organize-title-holder"));

		const row = createElement("div", "row justify-content-center");
		const col = createElement("div", "col-12 col-md-6 col-lg-5 col-xl-6");
		const logos = createElement("div", "d-flex flex-column flex-lg-row justify-content-around");
		data.organize.logos.forEach((logo) => {
			const image = document.createElement("img");
			image.src = logo.src;
			image.alt = logo.alt;
			image.className = "img-fluid p-2 rounded-5 overflow-hidden";
			logos.append(image);
		});
		col.append(logos);
		row.append(col);
		container.append(row);
		root.append(container);
	};

	const renderFooter = () => {
		const root = document.querySelector("[data-footer-root]");

		if (!root || !data.footer) {
			return;
		}

		const container = createElement("div", "container");
		container.append(createElement("h5", "pt-3 text-white text-center fw-bold", data.footer.title));

		const row = createElement("div", "row");
		const mainCol = createElement("div", "col-12 col-lg-8");
		const innerRow = createElement("div", "row pt-4");

		const contactCol = createElement("div", "col-12 col-md-6 text-white");
		contactCol.append(createElement("h5", "fw-bold", data.footer.contactTitle));
		const addressLabel = data.footer.addressLabel || "Địa chỉ";
		contactCol.append(
			createElement(
				"p",
				"px-2",
				`${addressLabel}: ${data.footer.address}<br />Hotline: <a href="tel:${data.footer.hotline}">${data.footer.hotline}</a><br />Email: <a href="mailto:${data.footer.email}">${data.footer.email}</a>`,
			),
		);

		const linksCol = createElement("div", "col-12 col-md-6");
		linksCol.append(createElement("h5", "fw-bold text-white", data.footer.linksTitle));
		const linksList = document.createElement("ul");
		data.footer.links.forEach((link) => {
			const item = createElement("li", "pb-3");
			const anchor = createElement("a", "highlight-yellow text-dark");
			anchor.href = link.href;
			anchor.append(document.createTextNode(link.label));
			anchor.append(createIcon("external-link-symbol", "icon icon-ref"));
			item.append(anchor);
			linksList.append(item);
		});
		linksCol.append(linksList);

		innerRow.append(contactCol, linksCol);
		mainCol.append(innerRow);
		row.append(mainCol);
		container.append(row);
		container.append(createElement("small", "text-white text-center d-block mx-auto py-2", data.footer.copyright));
		root.append(container);
	};

	renderContact();
	renderInfo();
	renderOrganize();
	renderFooter();
})();
