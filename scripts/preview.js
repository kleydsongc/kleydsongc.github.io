const gifs = ["assets/gifs/static.gif", "assets/gifs/dvd.gif"];

gifs.forEach(src => {
	const img = new Image();
	img.src - src;
});

const preview = document.getElementById("preview-img");
const projetos = document.querySelectorAll("[data-preview]");

projetos.forEach(function(projeto) {
	projeto.addEventListener("mouseenter", function() {
		preview.src = "assets/gifs/static.gif";
		setTimeout(() => {
			preview.src = projeto.dataset.preview;
		}, 150);
	});

	projeto.addEventListener("mouseleave", function() {
		preview.src = "assets/gifs/static.gif";
		setTimeout(() => {
			preview.src = "assets/gifs/dvd.gif";
		}, 150);
	});
});
