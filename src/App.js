import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="h-1">
            <h1>facebook</h1>
            <form className="formh" action="index.js" method="post">
              <label for="">Email atau Telepon</label>
              <label for="">Kata Sandi</label>
              <input className='txtb' type="text" placeholder="" name=" uname " required />
              <input className='txtb' type="password" placeholder="" name=" psw " required />
              <button id='btn'>Masuk</button>
              <a href="#">Lupa akun?</a>
            </form>
          </div>
        </div>
        <div className="cent">
          <div className="c1">
            <h2>Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</h2>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png" alt=""></img>
            <form className="Daftar" action="index.js" method="post">
              <h1>Daftar</h1>
              <p>Gratis, sampai kapan pun.</p>
              <input id='txt1' type="text" placeholder="Nama depan" name=" uname " required />
              <input id='txt1' type="text" placeholder="Nama belakang" name=" uname " required />
              <input id='txt2' type="text" placeholder="Nomer seluler atau email" name=" uname " required />
              <input id='txt2' type="password" placeholder="Kata sandi baru" name=" psw " required />
              <p>Tanggal Lahir</p>
              <span id="s1">
                <select className="" name="">
                  <option value="">Tanggal</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select className="" name="">
                  <option value="">Bulan</option>
                  <option value="Januari">Jan</option>
                  <option value="Februari">Feb</option>
                  <option value="Maret">Mar</option>
                  <option value="April">Apr</option>
                  <option value="Mei">Mei</option>
                  <option value="Juni">Jun</option>
                  <option value="Juli">Jul</option>
                  <option value="Agustus">Ags</option>
                  <option value="September">Sep</option>
                  <option value="Oktober">Okt</option>
                  <option value="September">Sep</option>
                  <option value="Oktober">Okt</option>
                  <option value="November">Nov</option>
                  <option value="Desember">Des</option>
                </select>
                <select className="" name="">
                  <option value="">Tahun</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                </select>
                <a id='hr' href="#">Mengapa saya harus memberikan tanggal lahir saya?</a>
              </span><br></br>
              <span id="r1">
                <input type="radio" name="gender" required />
                <label for="">Perempuan </label>
                <input type="radio" name="gender" required />
                <label for="">Laki-laki</label>
              </span>
              Dengan mengklik Daftar, Anda menyetujui <a href="#">Ketentuan, Kebijakan Data </a> dan <a href="#">Kebijakan Cookie kami</a>.Anda akan menerima Notifikasi SMS dari Facebook dan dapat menolaknya kapan saja
              <br></br><input id='btn2' type="button" name="" value="Daftar"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
