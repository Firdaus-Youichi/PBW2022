//buat variabel
var nilai1 = document.getElementById('nilai1');
var nilai2 = document.getElementById('nilai2');
var tambah = document.getElementById('tambah');
var kurang = document.getElementById('kurang');
var kali = document.getElementById('kali');
var bagi = document.getElementById('bagi');
var pangkat = document.getElementById('pangkat');
var hasil = document.getElementById('hasil');
var reset = document.getElementById('reset');
tambah.addEventListener('click', function(){
    //jalankan program untuk tambah
    tambah = parseInt(nilai1.value) + parseInt(nilai2.value);
    hasil.value = tambah;
});

kurang.addEventListener('click', function(){
    //jalankan program untuk kurang
    kurang = parseInt(nilai1.value) - parseInt(nilai2.value);
    hasil.value = kurang;
});

kali.addEventListener('click', function(){
    //jalankan program untuk kali
    kali = parseInt(nilai1.value) * parseInt(nilai2.value);
    hasil.value = kali;
});

bagi.addEventListener('click', function(){
    //jalankan program untuk bagi
    bagi = parseInt(nilai1.value) / parseInt(nilai2.value);
    hasil.value = bagi;
});

pangkat.addEventListener('click', function(){
    //jalankan program untuk pangkat
    pangkat = parseInt(nilai1.value) ** parseInt(nilai2.value);
    hasil.value = pangkat;
});

reset.addEventListener('click', function(){
    //jalankan program untuk reset
    hasil.value = "";
    nilai1.value = "";
    nilai2.value = "";
});