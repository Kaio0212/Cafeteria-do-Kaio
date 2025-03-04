function CheckRestauranteOpen() {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 7 && hora < 22;
  }

  const spanItem = document.getElementById("data-span");
  const estaAberto = CheckRestauranteOpen();

  if (estaAberto) {
    spanItem.style.backgroundColor = "rgb(2, 175, 2)";
  } else {
    spanItem.style.backgroundColor = "rgb(237, 15, 15)";
  }