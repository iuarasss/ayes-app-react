import "./custom.css";

import Nama from "./Nama";
import Nim from "./Nim";
import Jurusan from "./Jurusan";
import Alamat from "./Alamat";
import Email from "./Email";
import Hobi from "./Hobi";

function BiodataDiri() {
  return (
    <div className="card">
      <h2>Biodata Diri</h2>
      <Nama />
      <Nim />
      <Jurusan />
      <Alamat />
      <Email />
      <Hobi />
    </div>
  );
}

export default BiodataDiri;