import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="h-1">
            <h1>facebook</h1>
            <from className="formh" action="index.js" method="post">
              <label for="">Email atau Telepon</label>
              <label for="">Kata Sandi</label>
              <input id='txtb' type="text" placeholder="" name=" uname " required />
              <input id='txtb' type="password" placeholder="" name=" psw " required />
              <button id='btm'>Masuk</button>
              <a href="#">Lupa akun?</a>
            </from>
          </div>
        </div>
        <div className="cent">
          <div className="c1">
            <h2>Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</h2>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png" alt=""></img>
            <from className="Daftar" action="index.js" method="post">
              <h1>Daftar</h1>
              <p>Gratis, sampai kapan pun.</p>
              <input id='txt1' type="text" placeholder="Nama depan" name=" uname " required />
              <input id='txt1' type="text" placeholder="Nama belakang" name=" uname " required />
              <input id='txt2' type="text" placeholder="Nomer seluler atau email" name=" uname " required />
              <input id='txt2' type="text" placeholder="Kata sandi baru" name=" uname " required />
              <p>Tanggal Lahir</p>
              <span id="s1">
                <select className="" name="">
                  <option value="">Tanggal</option>
                </select>
                <select className="" name="">
                  <option value="">Bulan</option>
                </select>
                <select className="" name="">
                  <option value="">Tahun</option>
                </select>
                <a id='hr'href="#">Mengapa saya harus memberikan tanggal lahir saya?</a>
              </span><br></br>
              <span id="r1">
                <input type="radio" name="" required />
                <label for="">Perempuan </label>
                <input type="radio" name="" required />
                <label for="">Laki-laki</label>
              </span>
              Dengan mengklik Daftar, Anda menyetujui <a href="#">Ketentuan, Kebijakan Data </a> dan <a href="#">Kebijakan Cookie kami</a>.Anda akan menerima Notifikasi SMS dari Facebook dan dapat menolaknya kapan saja
              <br></br><input id='btn2'   type="button" name="" value="Daftar"></input>
            </from>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
