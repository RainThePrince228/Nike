window.onload = function() {
    document.getElementById("SneakerImage1").getElementsByTagName("img")[0].src = "assets/img/Sneakers1.png";
    document.getElementById("SneakerImage2").getElementsByTagName("img")[0].src = "assets/img/Sneakers2.png";
    document.getElementById("SneakerImage3").getElementsByTagName("img")[0].src = "assets/img/Sneakers3.png";
    document.getElementById("SneakerImage4").getElementsByTagName("img")[0].src = "assets/img/Sneakers4.png";
};

function openPersonalAccount() {
    window.location.href = 'Account.html';
}

function openSneakersOne() {
    window.location.href = 'Sneakers1.html';
}

function openSneakersTwo() {
    window.location.href = 'Sneakers2.html';
}

function openSneakersThree() {
    window.location.href = 'Sneakers3.html';
}

function openSneakersFour() {
    window.location.href = 'Sneakers4.html';
}