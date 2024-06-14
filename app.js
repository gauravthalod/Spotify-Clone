const music = new Audio('songs/1.mp3');
let index1=0;
let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        document.getElementsByClassName('green')[index1].style.color="#0fa34d";
        document.getElementsByClassName('subtitle')[index1].style.color="#1fa34d";
        
        masterPlay.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.innerHTML='<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>';
    }else {
        music.pause();
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.innerHTML='<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>';
    }
});

var slider1 = document.getElementById("myRangev");
slider1.oninput = function() {
    var percent = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #0fa34d 0%, #0fa34d ' + percent + '%, #ddd ' + percent + '%, #ddd 100%)';
};
var slider2 = document.getElementById("myRange");
slider2.oninput = function() {
    var percent = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = 'linear-gradient(to right, #0fa34d 0%, #0fa34d ' + percent + '%, #ddd ' + percent + '%, #ddd 100%)';
};


const songs = [
    {
        id:"1",
        songName:`3:15(Breathe)<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Russ</div>`,
    },
    {
        id:"2",
        songName:`Fe!n<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Travis Scott</div>`,
    },
    {
        id:"3",
        songName:`9:45<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Prabh</div>`,
    },
    {
        id:"4",
        songName:`Arjan Vailly<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Animal</div>`,
    },
    {
        id:"5",
        songName:`Earned it<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">The Weeknd</div>`,
    },
    {
        id:"6",
        songName:`Yelipomakeyy<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">AR Rahaman</div>`,
    },
    {
        id:"7",
        songName:`Love Story<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Taylor Swift</div>`,
    },
    {
        id:"8",
        songName:`Not So Bad<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Eminem</div>`,
    },
    {
        id:"9",
        songName:`One Dance<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Drake</div>`,
    },
    {
        id:"10",
        songName:`Positions<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Ariana Grande</div>`,
    },
    {
        id:"11",
        songName:`Rebel<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Shenseea</div>`,
    },
    {
        id:"12",
        songName:`Skechers<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">DripReport</div>`,
    },
    {
        id:"13",
        songName:`Renegade X Under the influence X I was never there<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Remix</div>`,
    },
    {
        id:"14",
        songName:`True Stories<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Ap Dhillon</div>`,
    },
    {
        id:"15",
        songName:`With You<svg class="light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
        <div class="subtitle">Ap Dhillon</div>`,
    },
];
const makeallwhite = ()=>{
    Array.from(document.getElementsByClassName("green")).forEach((el)=>{
        el.style.color="rgba(255, 255, 255, 0.904)";
    });
    Array.from(document.getElementsByClassName("subtitle")).forEach((el)=>{
        el.style.color="rgb(155, 153, 153)";
    });
};
let index=0;
let poster_master= document.getElementById('poster_master');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('play_song')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        console.log(index);
        music.src=`songs/${index}.mp3`;
        music.play();
        poster_master.src= `img/${index}.jpg`;
        masterPlay.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.innerHTML='<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>';

        let songTitles = songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML=songName;
        });
        makeallwhite();
        Array.from(document.getElementsByClassName('green'))[index-1].style.color="#0fa34d";
        Array.from(document.getElementsByClassName('subtitle'))[index-1].style.color="#0fa34d";
        index1=index-1;
    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('myRange');

music.addEventListener('timeupdate',()=>{
    let music_curr_time = music.currentTime;
    let music_duration = music.duration;
    

    let min1 = Math.floor(music_duration/60);
    let sec1 = Math.floor(music_duration%60);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr_time/60);
    let sec2 = Math.floor(music_curr_time%60);
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progress_bar = parseInt((music_curr_time/music_duration)*100);
    seek.value = progress_bar;

    music.addEventListener('loadedmetadata', function() {
        seek.max = music.duration;
    });
    seek.style.background = 'linear-gradient(to right, #0fa34d 0%, #0fa34d ' + seek.value + '%, #ddd ' + seek.value + '%, #ddd 100%)';
});
seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let volumeseek = document.getElementById('myRangev');
volumeseek.addEventListener('change',()=>{
    music.volume = volumeseek.value/100;
    volumeseek.style.background = 'linear-gradient(to right, #0fa34d 0%, #0fa34d ' + volumeseek.value + '%, #ddd ' + volumeseek.value + '%, #ddd 100%)';
});


let prev = document.getElementById('prev');
let next = document.getElementById('next');
let len = Array.from(document.getElementsByClassName('song_item')).length;
prev.addEventListener('click',()=>{
    index--;
    if(index<1){
        index=len;
    }
    music.src=`songs/${index}.mp3`;
        music.play();
        poster_master.src= `img/${index}.jpg`;
        masterPlay.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.innerHTML='<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>';

        let songTitles = songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML=songName;
        });
        makeallwhite();
        Array.from(document.getElementsByClassName('green'))[index-1].style.color="#0fa34d";
        Array.from(document.getElementsByClassName('subtitle'))[index-1].style.color="#0fa34d";
});
next.addEventListener('click',()=>{
    index++;
    if(index>len){
        index=1;
    }
    music.src=`songs/${index}.mp3`;
        music.play();
        poster_master.src= `img/${index}.jpg`;
        masterPlay.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.innerHTML='<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>';

        let songTitles = songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML=songName;
        });
        makeallwhite();
        Array.from(document.getElementsByClassName('green'))[index-1].style.color="#0fa34d";
        Array.from(document.getElementsByClassName('subtitle'))[index-1].style.color="#0fa34d";
});