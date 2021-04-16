import React, { Component, useEffect, useState } from 'react';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { logo } from '../../assets';
import { Dropdown } from 'react-bootstrap';
import './style.css';


const Sidebars = (props) => {

  const [active, setActive] = useState();
  return(
    <div class="sidenav">
        <a href="/"><img src={logo} style={{width:150, height:170}}/></a>
        <a href="/">Beranda</a>
        <Dropdown>
          <Dropdown.Toggle className="dropdown-btn" style={{backgroundColor:'#050505'}} id="dropdown-basic">
            Profil Kami
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-container">
            <Dropdown.Item href="/profil">Profil</Dropdown.Item>
            <Dropdown.Item href="/visimisi">Visi & Misi</Dropdown.Item>
            <Dropdown.Item href="/sejarah">Sejarah</Dropdown.Item>
            <Dropdown.Item href="/" onClick={() => alert("Belum dapat diakses")}>Struktur Perusahaan</Dropdown.Item>
            <Dropdown.Item href="/" onClick={() => alert("Belum dapat diakses")}>Penghargaan</Dropdown.Item>
            <Dropdown.Item href="/" onClick={() => alert("Belum dapat diakses")}>Mitra</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <button className="dropdown-btn" onClick={""}>Profil Kami
          <ExpandMore/>
        </button>
        <div id="myDropdown" class="dropdown-container">
          <a href="/profil">Profil</a>
          <a href="/visimisi">Visi & Misi</a>
          <a href="/sejarah">Sejarah</a>
          <a onClick={() => alert("Belum bisa diakses")} href="/">Struktur Perusahaan</a>
          <a onClick={() => alert("Belum dapat diakses")} href="/">Penghargaan</a>
          <a onClick={() => alert("Belum ada mitra")} href="/mitra">Mitra</a>
        </div> */}
        <a onClick={() => alert("Belum ada berita")} href="/">Berita</a>
        <a onClick={() => alert("Belum ada lowongan")} href="/">Karir</a>
        <a onClick={() => alert("Silahkan menuju halaman hubungi kami untuk sementara atau melalui whatsapp yang tersedia")} href="/">Investasi</a>
        {/* <button class="dropdown-btn">Galeri
          <ExpandMore/>
        </button>
        <div class="dropdown-container">
          <a onClick={() => alert("Belum ada foto")} href="/">Foto</a>
          <a onClick={() => alert("Belum ada video")} href="/">Video</a>
        </div> */}
        <Dropdown>
          <Dropdown.Toggle className="dropdown-btn" style={{backgroundColor:'#050505'}} id="dropdown-basic">
            Our Project
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-container">
            <Dropdown.Item href="/warakas">Warakas</Dropdown.Item>
            <Dropdown.Item href="/swasembada">Swasembada</Dropdown.Item>
            <Dropdown.Item href="/bahari">Bahari</Dropdown.Item>
            <Dropdown.Item href="/papanggo">Papanggo</Dropdown.Item>
            <Dropdown.Item href="/cilincing">Cilincing</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="/hubungikami">Hubungi Kami</a>
        <div style={{flexDirection:'row'}}>
          <a className="transparent" href="http://instagram.com/midland.properti"><Instagram/>midland.properti</a>
        </div>
      </div>
  );
}

export default Sidebars;