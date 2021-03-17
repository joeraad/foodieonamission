$('[data-tooltip="tooltip"]').tooltip();

function openNav() {
	if (document.getElementById("mySidenav") != null) {
		document.getElementById("mySidenav").style.width = "100%";
		document.getElementById("mySidenav").style.opacity = "1";
	}
}
function closeNav() {
	if (document.getElementById("mySidenav") != null) {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mySidenav").style.opacity = "0";
	}
}
if (document.getElementById("sideNav-recipies") != null) {
	document
		.getElementById("sideNav-recipies")
		.addEventListener("click", function () {
			if (
				document.getElementById("sideNav-recipies-chevron").style.transform ==
				"rotate(0deg)"
			) {
				document.getElementById("sideNav-recipies-chevron").style.transform =
					"rotate(180deg)";
				document.querySelector(".sideNavDropdown").style.height = "90px";
				document.querySelector(".sideNavDropdown").style.opacity = "1";
				document
					.querySelector(".sideNavDropdownToggle")
					.classList.add("selected");
			} else {
				document.getElementById("sideNav-recipies-chevron").style.transform =
					"rotate(0deg)";
				document.querySelector(".sideNavDropdown").style.height = "0px";
				document.querySelector(".sideNavDropdown").style.opacity = "0";
				document
					.querySelector(".sideNavDropdownToggle")
					.classList.remove("selected");
			}
		});
}

//  <div class="align-baseline mx-auto no-grow offset-1 flex flex-row position-absolute"></div>
