console.log("Welcome to Songeet")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/17Tamak-Pata-Ashes.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Vande Mataram", filePath: "songs/1.mp3", coverPath:"covers/1Vande_Mataram.jpeg"},
    {songName:"Prithibi Ta Naki", filePath: "songs/2.mp3", coverPath:"covers/2Prithibi-Ta-Naki-Chhoto-Hote-Hote.jpg"},
    {songName:"Ae Dil Hai Mushkil", filePath: "songs/3.mp3", coverPath:"covers/3Ae_Dil_Hai_Mushkil.jpg"},
    {songName:"Apna Bana Le", filePath: "songs/4.mp3", coverPath:"covers/4Apna-Bana-Le.jpg"},
    {songName:"Amon Chena Ashes", filePath: "songs/5.mp3", coverPath:"covers/5Amon-Chena-Ashes.jpg"},
    {songName:"Aro Ekbaar Cholo Phire Jai", filePath: "songs/6.mp3", coverPath:"covers/6Aro Ekbaar Cholo Phire Jai.jpg"},
    {songName:"Bekheyali-Station-Road-Ashes", filePath: "songs/7.mp3", coverPath:"covers/7Bekheyali-Station-Road-Ashes.jpeg"},
    {songName:"Yeh Ishq Hai", filePath: "songs/8.mp3", coverPath:"covers/8Yeh Ishq Hai.jpg"},
    {songName:"Gajar Nouka", filePath: "songs/9.mp3", coverPath:"covers/9Gajar Nouka.jpeg"},
    {songName:"Bishkta Manush", filePath: "songs/10.mp3", coverPath:"covers/10Bishkta Manush.jpg"},
    {songName:"Dhulabali-Ashes", filePath: "songs/11.mp3", coverPath:"covers/11Dhulabali-Ashes.jpeg"},
    {songName:"Bhalobashar-Tanpura-Ashes", filePath: "songs/12.mp3", coverPath:"covers/12Bhalobashar-Tanpura-Ashes.jpeg"},
    {songName:"Ekla Ghar", filePath: "songs/13.mp3", coverPath:"covers/13Ekla Ghar.jpeg"},
    {songName:"Neel Rang Chhilo Bhishan Priyo", filePath: "songs/14.mp3", coverPath:"covers/14Neel Rang Chhilo Bhishan Priyo.jpg"},
    {songName:"Pal (Jalebi)", filePath: "songs/15.mp3", coverPath:"covers/15Pal (Jalebi).jpg"},
    {songName:"Shayad - Love Aaj Kal", filePath: "songs/16.mp3", coverPath:"covers/16Shayad - Love Aaj Kal.jpg"},
    {songName:"Tum Se Hi", filePath: "songs/18.mp3", coverPath:"covers/18Tum Se Hi.jpg"},
    {songName:"Tarabati-Ashes", filePath: "songs/19.mp3", coverPath:"covers/19Tarabati-Ashes.jpg"},
    {songName:"Kemon-Acho-Ashes", filePath: "songs/20.mp3", coverPath:"covers/20Kemon-Acho-Ashes.jpg"},
    {songName:"Dekho Manashi", filePath: "songs/21.mp3", coverPath:"covers/21Dekho Manashi.jpg"},

]

songItems.forEach((elements,i)=>{
    elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
    elements.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=19){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
