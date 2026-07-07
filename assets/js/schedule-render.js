(function () {
	const data = window.TRIP_SCHEDULE_DATA;
	const root = document.querySelector("[data-schedule-root]");

	if (!data || !root) {
		return;
	}

	const title = root.querySelector("[data-schedule-title]");
	const selectorTitle = root.querySelector("[data-schedule-selector-title]");

	if (title && data.title) {
		title.textContent = data.title;
	}

	if (selectorTitle && data.selectorTitle) {
		selectorTitle.textContent = data.selectorTitle;
	}

	const createButton = (group, index, variant) => {
		const button = document.createElement("button");
		button.className =
			variant === "mobile"
				? "nav-link schedule-group-tab schedule-group-tab--mobile flex-fill"
				: "nav-link schedule-group-tab";
		button.type = "button";
		button.role = "tab";
		button.id = `schedule-${variant}-${group.id}-tab`;
		button.dataset.scheduleGroup = group.id;
		button.setAttribute("aria-controls", `schedule-${group.id}`);
		button.setAttribute("aria-selected", index === 0 ? "true" : "false");
		button.textContent = group.label;

		if (index === 0) {
			button.classList.add("active");
		}

		button.addEventListener("click", () => activateGroup(group.id));
		return button;
	};

	const createTimeline = (events) => {
		const table = document.createElement("table");
		table.className = "schedule-timeline-holder";

		const tbody = document.createElement("tbody");
		events.forEach((event) => {
			const row = document.createElement("tr");

			const time = document.createElement("td");
			time.scope = "row";
			time.className = "schedule-time text-center";
			time.textContent = event.time;

			const detail = document.createElement("td");
			detail.className = "schedule-details";
			detail.innerHTML = event.detail;

			row.append(time, detail);
			tbody.append(row);

			const spacer = document.createElement("tr");
			spacer.className = "spacer";
			tbody.append(spacer);
		});

		table.append(tbody);
		return table;
	};

	const getGalleryImages = (group) => {
		const images = data.gallery || group.days.map((day) => ({
			src: day.image,
			alt: day.imageAlt || data.title,
		}));

		return images.filter((image, index, list) => (
			image &&
			image.src &&
			list.findIndex((item) => item && item.src === image.src) === index
		));
	};

	const createGallery = (group) => {
		const images = getGalleryImages(group);

		if (!images.length) {
			return null;
		}

		let activeIndex = 0;
		const gallery = document.createElement("div");
		gallery.className = "schedule-gallery mb-4";

		const stage = document.createElement("div");
		stage.className = "schedule-gallery-stage";

		const mainImage = document.createElement("img");
		mainImage.className = "schedule-gallery-image";
		mainImage.loading = "lazy";

		const prevButton = document.createElement("button");
		prevButton.className = "schedule-gallery-arrow schedule-gallery-arrow--prev";
		prevButton.type = "button";
		prevButton.setAttribute("aria-label", "Hinh truoc");
		prevButton.textContent = "‹";

		const nextButton = document.createElement("button");
		nextButton.className = "schedule-gallery-arrow schedule-gallery-arrow--next";
		nextButton.type = "button";
		nextButton.setAttribute("aria-label", "Hinh tiep theo");
		nextButton.textContent = "›";

		const dots = document.createElement("div");
		dots.className = "schedule-gallery-thumbs";

		const updateGallery = (nextIndex) => {
			activeIndex = (nextIndex + images.length) % images.length;
			const activeImage = images[activeIndex];
			mainImage.src = activeImage.src;
			mainImage.alt = activeImage.alt || data.title;

			dots.querySelectorAll(".schedule-gallery-thumb").forEach((button, index) => {
				const isActive = index === activeIndex;
				button.classList.toggle("active", isActive);
				button.setAttribute("aria-current", isActive ? "true" : "false");
			});
		};

		images.forEach((image, index) => {
			const thumb = document.createElement("button");
			thumb.className = "schedule-gallery-thumb";
			thumb.type = "button";
			thumb.setAttribute("aria-label", `Chon hinh ${index + 1}`);

			const thumbImage = document.createElement("img");
			thumbImage.src = image.src;
			thumbImage.alt = "";
			thumbImage.loading = "lazy";

			thumb.append(thumbImage);
			thumb.addEventListener("click", () => updateGallery(index));
			dots.append(thumb);
		});

		mainImage.addEventListener("click", () => updateGallery(activeIndex + 1));
		prevButton.addEventListener("click", () => updateGallery(activeIndex - 1));
		nextButton.addEventListener("click", () => updateGallery(activeIndex + 1));

		stage.append(mainImage, prevButton, nextButton);
		gallery.append(stage, dots);
		updateGallery(0);

		return gallery;
	};

	const createDay = (day) => {
		const row = document.createElement("div");
		row.className = "row my-2";

		const textCol = document.createElement("div");
		textCol.className = day.reversed
			? "col-12 col-lg-7 px-md-4 mt-5 order-1 order-lg-2"
			: "col-12 col-lg-7 px-md-2 mt-5 order-1";

		const headingWrap = document.createElement("div");
		headingWrap.className = "d-flex align-items-center";

		const heading = document.createElement("h3");
		heading.className = "fw-bold fs-2 color-blue";
		heading.textContent = `${day.title} `;

		const route = document.createElement("span");
		route.className =
			"schedule-route my-2 fs-5 d-block rounded-pill px-3 py-1 bg-blue text-white w-fit-content text-uppercase";
		route.textContent = day.route;

		heading.append(route);
		headingWrap.append(heading);
		textCol.append(headingWrap, createTimeline(day.events));

		const imageCol = document.createElement("div");
		imageCol.className = day.reversed
			? "col-12 col-lg-5 px-md-2 order-2 order-lg-1"
			: "col-12 col-lg-5 px-md-2 order-2";

		const image = document.createElement("img");
		image.alt = day.imageAlt || data.title;
		image.src = day.image;
		image.className = "schedule-image-sticky d-block object-fit-cover w-100";
		image.loading = "lazy";
		imageCol.append(image);

		row.append(textCol, imageCol);
		return row;
	};

	const createPane = (group, index) => {
		const pane = document.createElement("div");
		pane.className = index === 0 ? "tab-pane fade show active" : "tab-pane fade";
		pane.id = `schedule-${group.id}`;
		pane.role = "tabpanel";
		pane.setAttribute("aria-labelledby", `schedule-desktop-${group.id}-tab`);
		pane.tabIndex = 0;

		const gallery = createGallery(group);
		if (gallery) {
			pane.append(gallery);
		}

		group.days.forEach((day) => pane.append(createDay(day)));
		return pane;
	};

	const activateGroup = (groupId) => {
		root.querySelectorAll("[data-schedule-group]").forEach((button) => {
			const isActive = button.dataset.scheduleGroup === groupId;
			button.classList.toggle("active", isActive);
			button.setAttribute("aria-selected", isActive ? "true" : "false");
		});

		root.querySelectorAll(".tab-pane").forEach((pane) => {
			const isActive = pane.id === `schedule-${groupId}`;
			pane.classList.toggle("show", isActive);
			pane.classList.toggle("active", isActive);
		});
	};

	const desktopNav = root.querySelector("[data-schedule-nav='desktop']");
	const mobileNav = root.querySelector("[data-schedule-nav='mobile']");
	const content = root.querySelector("[data-schedule-content]");

	data.groups.forEach((group, index) => {
		desktopNav.append(createButton(group, index, "desktop"));
		mobileNav.append(createButton(group, index, "mobile"));
		content.append(createPane(group, index));
	});
})();
