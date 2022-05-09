function getDataIndo() {
  fetch("https://data.covid19.go.id/public/api/update.json", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {

      let positif = data.update.penambahan.jumlah_positif;
      let sembuh = data.update.penambahan.jumlah_sembuh;
      let meninggal = data.update.penambahan.jumlah_meninggal;

      document.getElementById("dataPositif").innerHTML = positif;
      document.getElementById("dataSembuh").innerHTML = sembuh;
      document.getElementById("dataMeninggal").innerHTML = meninggal;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDataProv() {
  let dataProvinsi = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";
  fetch("https://data.covid19.go.id/public/api/prov.json", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.list_data.forEach(function (item) {
        dataProvinsi += "<tr>";
        dataProvinsi += "<td>" + item.key + "</td>";
        dataProvinsi += "<td>" + item.penambahan.positif + "</td>";
        dataProvinsi += "<td>" + item.penambahan.sembuh + "</td>";
        dataProvinsi += "<td>" + item.penambahan.meninggal + "</td>";
        dataProvinsi += "</tr>";
      });

      document.getElementById("table-provinsi").innerHTML = dataProvinsi;
    })
    .catch((err) => {
      console.log(err);
    });
}
