import React, { Component, useEffect, useState } from 'react';
import "../../assets/css/style.css";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import { logo } from '../../assets';


const Sidebars = (props) => {

  useEffect(() => {
    //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  })

  const [active, setActive] = useState();
  return(
    <div class="sidenav">
        <a href="/"><img src={logo} style={{width:150, height:170}}/></a>
        <a href="/">Beranda</a>
        <button class="dropdown-btn">Profil Kami
          <ExpandMore/>
        </button>
        <div class="dropdown-container">
          <a href="/profil">Profil</a>
          <a href="/visimisi">Visi & Misi</a>
          <a href="/sejarah">Sejarah</a>
          <a href="/strukturperusahaan">Struktur Perusahaan</a>
          <a href="/penghargaan">Penghargaan</a>
          <a href="/mitra">Mitra</a>
        </div>
        <a href="/berita">Berita</a>
        <a href="/karir">Karir</a>
        <a href="/investasi">Investasi</a>
        <button class="dropdown-btn">Proyek Kami
          <ExpandMore/>
        </button>
        <div class="dropdown-container">
          <a href="proyek1">Swasembada Syariah</a>
          <a href="proyek2">Priok Residence</a>
          <a href="proyek3">Warakas Permai</a>
        </div>
        <a href="/hubungikami">Hubungi Kami</a>
        <div style={{flexDirection:'row'}}>
          <a className="transparent" href="http://instagram.com"><Instagram/>midland.properti</a>
          <a className="transparent" href="http://youtube.com"><YouTube/>Midland Properti</a>
        </div>
      </div>
  );
}

export default Sidebars;