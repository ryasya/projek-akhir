const container = document.getElementById("show-barang");
const ingfut = document.getElementById("ingfut");
const th = document.getElementById("th");
let totalPrice = document.getElementById("total-price");
let diskon = document.getElementById("Diskon");
let hargatotal = document.getElementById("harga-total");
const konz = document.getElementById("konz");
const locale = "id-ID";
const options = {
  style: "currency",
  currency: "IDR",
};
let total_beli = 0;
for (let i = 0; i < data.length; i++) {
  let item = data[i];
  let div = document.createElement("div");
  div.classList.add("item1", "pt-2");
  container.appendChild(div);


  let dflex = document.createElement("div");
  dflex.classList.add("d-flex");
  div.appendChild(dflex);

  let img = document.createElement("img");
  img.src = item.gambar;
  img.setAttribute("width", "100px");
  dflex.appendChild(img);

  let row = document.createElement("div");
  row.classList.add("row");
  dflex.appendChild(row);

  let p1 = document.createElement("p");
  p1.textContent = item.namaBarang;
  div.appendChild(p1);

  let p2 = document.createElement("p");
  p2.textContent = item.harga;
  row.appendChild(p2);

  let inp = document.createElement("input");
  inp.setAttribute("id", "iteng" + i);
  inp.setAttribute("type", "number");
  inp.setAttribute("min", "0");
  inp.setAttribute("max", item.stock);

  ingfut.appendChild(inp);

  let totalharga = document.createElement("strong");
  totalharga.textContent = "Rp 0,00";
  totalharga.setAttribute("id", "ht" + i);
  th.appendChild(totalharga);

  //validasi data
  konz.addEventListener("click", function () {
    let ingfp = document.getElementById("iteng" + i).value;
    let hb = document.getElementById("ht" + i);
    let habato = ingfp * item.harga;
    hb.textContent = habato.toLocaleString(locale, options);
    console.log(habato);
    total_beli = habato + total_beli;
    totalPrice.textContent = total_beli.toLocaleString(locale, options);
    hargatotal.textContent = total_beli.toLocaleString(locale, options);
    if (total_beli >= 100000) {
      diskon.textContent = "10%";
      let disk = (total_beli * 90) / 100;
      hargatotal.textContent = disk.toLocaleString(locale, options);
    } else {
      diskon.textContent = "10% hanya untuk pembelian diatas 100.000";
    }
  });
}