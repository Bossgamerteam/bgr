<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div id="coverart" class="hide-div">
    <img src="https://bg-records.com/ui/album-error.png" class="imgg" id="cover-art" style="border-radius: 20px;">
</div>

<script>
  const contenta = [
  { holder: "homewave", artist: "boss_gameryt,liam mcmaster", content: "https://cdn.glitch.global/1d504920-1dff-4f7f-8350-daf89caa11d4/Test.jpg"},
];

//document.getElementById("randomidk").innerHTML = music[1].song;
const contentl = contenta;

for (const contenti of contentl) {
var ccontent = contenti

 //   sela = "<a class='song' song=" + sela.song + " " + "artist=" + sela.artist + " " + "aboutartist=" + sela.aboutartist + " " + "year=" + sela.released + " " + "copyright=" + sela.copyright + " " + "scode=" + sela.scode + " " + "pin=" + sela.spotlight + " " + ">" + "</a>"// + "<img src=" + 'https://dummyimage.com/600x400/000/fff&text=' + sela.song + " " + "height="+ "50" + " " + "width=" + "50" + " " + "style=" + 'display: inline;' + " "
//    document.write('<div> <span class="material-symbols-sharp">forward</span><h5 hidden>'+ selab.song +'</h5>'+sela+'<hr></div>');
if (song.toLowerCase() === ccontent.holder && artist.toLowerCase() === ccontent.artist) {
  document.getElementById('cover-art').src = ccontent.content
  document.getElementById('coverart').style.display = "inline"
}
}
</script>
