function generate() {
    var random_number1 = Math.floor(Math.random() * 6) + 1;
    var number_image1 = random_number1 + ".png";
    var image_source1 = "./images/" + number_image1;
    var player1_image = document.querySelectorAll("img")[0];
    player1_image.setAttribute("src", image_source1);
    var random_number2 = Math.floor(Math.random() * 6) + 1;
    var number_image2 = random_number2 + ".png";
    var image_source2 = "./images/" + number_image2;
    var player2_image = document.querySelectorAll("img")[1];
    player2_image.setAttribute("src", image_source2);
    var body_class = "bg-white";
    var h1_class = "mt-40 text-gray-700 font-Pacifico text-[2rem] font-extrabold";
    if (random_number1 > random_number2) {
        body_class = "bg-[#FFE082]";
        h1_class = "mt-40 text-[#F3B06C] font-Pacifico text-[2rem] font-extrabold";
        document.querySelector("body").setAttribute("class", body_class);
        document.querySelector("h1").setAttribute("class", h1_class);
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (random_number1 < random_number2) {
        body_class = "bg-[#8FFFE4]";
        h1_class = "mt-40 text-[#6EC0AB] font-Pacifico text-[2rem] font-extrabold";
        document.querySelector("body").setAttribute("class", body_class);
        document.querySelector("h1").setAttribute("class", h1_class);
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("body").setAttribute("class", body_class);
        document.querySelector("h1").setAttribute("class", h1_class);
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}
