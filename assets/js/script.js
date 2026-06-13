const field = document.getElementById("image-field");

const folderCount = 5;     // có 5 folder
const imageCount = 7;      // mỗi folder có 7 ảnh

for (let folder = 1; folder <= folderCount; folder++) {

    const img = document.createElement("img");

    img.className = "random-image";

    // 20%, 30%, 40%, 50%, 60%
    img.style.left = `${20 + (folder - 1) * 15}%`;

    field.appendChild(img);

    startLoop(img, folder);
}

function startLoop(img, folder) {

    function showNext() {

        // random ảnh 1.jpg → 7.jpg
        const index =
            Math.floor(Math.random() * imageCount) + 1;

        img.src =
            `../../img/fotobacrao/${folder}/${index}.png`;

        const angle =
            Math.random() * 30 - 15;

        const duration =
            2 + Math.random() * 0.5;

        img.style.setProperty(
            "--angle",
            `${angle}deg`
        );

        img.style.setProperty(
            "--duration",
            `${duration}s`
        );

        img.classList.remove("show");
        void img.offsetWidth;
        img.classList.add("show");

        setTimeout(showNext, duration * 1000);
    }

    // lệch pha để không đổi cùng lúc
    setTimeout(
        showNext,
        Math.random() * 1500
    );
}