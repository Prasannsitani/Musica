$(document).ready(function () {
  $(".topSongs__pause").css("display", "none");
  $(".recent__pause").css("display", "none");
});

$(".topSongs__box, .recent__box, .recent__heading").click(function (event) {
  $(this).find(".topSongs__pause, .recent__pause").slideToggle();
  $(this).find(".topSongs__play, .recent__play").slideToggle();
  $('.topSongs__box, .recent__box')
    .not(this)
        .each(function () {
            $(this).find(".topSongs__pause, .recent__pause").slideUp();
            $(this).find(".topSongs__play, .recent__play").slideDown();
        });      
});

$(".topSongs__sections h4").on('click',function() {
    $(this).addClass('active');
    $(".topSongs__sections h4")
        .not(this)
            .each(function() {
                $(this).removeClass('active');
            })
})

$('.topSongs__sections h4').on('click',function() {
  var check = $(this).html();
  // console.log(check);
  if(check === 'Week') {
    $('.topSongs__container--2').css('transform','translateX(-2rem)');
    $('.topSongs__container--2').css('opacity','1');
    $('.topSongs__container--2').css('z-index','100');
    $('.topSongs__container--1').css('opacity','0');
    $('.topSongs__container--1').css('transform','translateX(7rem)');
    $('.topSongs__container--1').css('z-index','99');
    $('.topSongs__container--3').css('opacity','0');
    $('.topSongs__container--3').css('transform','translateX(7rem)');
    $('.topSongs__container--3').css('z-index','99');
  } else if(check === 'Month') {
    $('.topSongs__container--3').css('transform','translateX(-2rem)');
    $('.topSongs__container--3').css('opacity','1');
    $('.topSongs__container--3').css('z-index','100');
    $('.topSongs__container--1').css('opacity','0');
    $('.topSongs__container--1').css('transform','translateX(7rem)');
    $('.topSongs__container--1').css('z-index','99');
    $('.topSongs__container--2').css('opacity','0');
    $('.topSongs__container--2').css('transform','translateX(7rem)');
    $('.topSongs__container--2').css('z-index','99');
  } else if(check === 'Today') {
    $('.topSongs__container--1').css('z-index','100');
    $('.topSongs__container--1').css('transform','translateX(-2rem)');
    $('.topSongs__container--1').css('opacity','1');
    $('.topSongs__container--3').css('opacity','0');
    $('.topSongs__container--3').css('transform','translateX(7rem)');
    $('.topSongs__container--3').css('z-index','99');
    $('.topSongs__container--2').css('opacity','0');
    $('.topSongs__container--2').css('transform','translateX(7rem)');
    $('.topSongs__container--2').css('z-index','99');
  }
})

$('.topSongs__box').on('mouseover',function(ev) {
    var select = $(this);
    $(this).find('.topSongs__iconbox--heartMain').on('click',function() {
      $(select).find('.topSongs__iconbox--heartBackground path').css('animation','fade-animation 2s ease-in-out forwards');
      $(select).find('.topSongs__iconbox--heartMain').css('fill','#0088ff');  
    })  
})

$('.search__input').on('focus',function() {
  $('.search__items').css('display','block');
  $('.search__items').css('height','max-content');
  $('.search__items').css('opacity','1');
  $('.search__items').css('z-index','100');
  $('.search__input').css('transform','scale(1.2)');
  $('.search__button').css('z-index','1');
  $('.search__button').css('left','56rem');
  $('.search__items').css('visibility','visible');
}).blur(function() {
  $('.search__items').css('height','0');
  $('.search__items').css('opacity','0');
  $('.search__items').css('z-index','0');
  $('.search__input').css('transform','scale(1)');
  $('.search__button').css('z-index','1');
  $('.search__button').css('left','6rem');
  $('.search__input').val("");
  $('.search__items').css('visibility','hidden');
})

$('.search__button').click(function() {
  $('.search__input').focus();
})

$('.search__input').on('keyup',function(e) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector(".search__input");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".search__items");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
    }
})


$('.header__login').click(function() {
  $('.login').css('opacity','1');
  $('.login').css('visibility','visible');
  $('.login__box').css('transform','translate(-50%,-50%)');
  $('.sidebar').css('z-index','-1');
  setTimeout(function() {
    $('input.login__input--active').focus();
  },500)
})

$('.header__signup').click(function() {
  $('.signup').css('opacity','1');
  $('.signup').css('visibility','visible');
  $('.signup__box').css('transform','translate(-50%,-50%)');
  $('.sidebar').css('z-index','-1');
  setTimeout(function() {
    $('input.signup__input--active').focus();
  },500)
})

$('.login__close').click(function() {
  $('.login').css('opacity','0');
  $('.login').css('visibility','hidden');
  $('.login__box').css('transform','translate(-50%,-30%)');
  $('input.login__input').val("");
  $('.sidebar').css('z-index','500');
})

$('.signup__close').click(function() {
  $('.signup').css('opacity','0');
  $('.signup').css('visibility','hidden');
  $('.signup__box').css('transform','translate(-50%,-30%)');
  $('input.signup__input').val("");
  $('.sidebar').css('z-index','500');
})


// Player Play Query
$(".topSongs__box, .recent__box, .recommended__box, .topArtists__box, .radio__box").on("click", function (ev) {
  var dataId = $(this).attr("data-switch");

  // This switches the song by dataId
  ap.list.switch(dataId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
  $(".playerIcon").addClass("showIcon");
});

var count = 0;
var id = 0;
$(".topSongs__box, .recent__box").on("click", function (ev) { 
    var changeId = id;
    id = $(this).attr("data-switch");
        if(id === changeId) {
            count = count + 1;
            if (count % 2 == 1) {
                ap.play();
                $(this).find(".topSongs__pause, .recent__pause").slideDown();
                $(this).find(".topSongs__play, .recent__play").slideUp();
            } else { 
                ap.pause();
                $(this).find(".topSongs__pause, .recent__pause").slideUp();
                $(this).find(".topSongs__play, .recent__play").slideDown();
            }
        } else {
            count = 1;
        }
});

$(".playerIcon").on("click", function (ev) {
  ap.pause();
  $("#aplayer").removeClass("showPlayer");
  $(".playerIcon").removeClass("showIcon");
  $(".topSongs__pause, .recent__pause").slideUp();
  $(".topSongs__play, .recent__play").slideDown();
});

$('.sidebar__link--search').click(function() {
  $('.search__input').focus();
})

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  lrcType: 1,
  audio: [
    {
      name: "Baby",               // Data-Switch = 0
      artist: "Justin Bieber",
      url: "songs/Baby.mp3",
      cover: "img/Baby.jpg",
      lrc: "[00:02.34]ah\n[00:06.21]ah\n[00:09.71]h aa\n[00:14.37]You know you love me\n[00:15.98]I know you care\n[00:17.70]Just shout whenever\n[00:19.44]And ill be there\n[00:21.38]You are my love you are my heart\n[00:24.98]And we will never ever ever be apart\n[00:29.05]Are we an item\n[00:30.68]Girl quit playin\n[00:32.72]We are just friends\n[00:34.47]What are you sayin\n[00:36.31]Said theres another and looked right in my eyes\n[00:39.85]My first love broke my heart for the first time\n[00:43.21]And I was like\n[00:44.17]baby baby baby\n[00:47.44]Like baby baby baby noo\n[00:51.11]Like baby baby baby\n[00:55.05]I thought You had always be mine mine\n[00:58.93]Babybaby baby ooh\n[01:02.54]Like baby baby baby noo\n[01:05.91]Like baby baby baby\n[01:10.00]I thought You had always be mine mine\n[01:13.37]Oh for you I would have done whatever\n[01:16.97]And I just cant believe we aint together\n[01:20.54]And I want to play it cool\n[01:22.72]but im loosing you\n[01:24.37]Ill buy you anything\n[01:26.15]ill buy you any ring\n[01:27.91]And I mean please say\n[01:29.97]baby fix me\n[01:31.70]And just shake me till you wake me from this bad dream\n[01:35.61]Im goin down down down down\n[01:39.20]And I just cant believe my first love wont be around\n[01:42.81]And im like baby baby baby\n[01:46.47]Like baby baby baby noo\n[01:50.14]Like baby baby baby\n[01:54.12]I thought You had always be mine mine\n[01:58.01]Baby baby baby ooh\n[02:01.31]Like baby baby baby noo\n[02:05.01]Like baby baby baby\n[02:08.98]I thought You had always be mine mine\n[02:12.61]LUDA\n[02:13.47]When I was 13 I had my first love\n[02:16.75]There was nobody that compared to my baby and\n[02:19.05]nobody came between us or could ever come above\n[02:21.37]She had me goin crazy oh I was star struck She woke me up\n[02:25.02]daily don′t need no starbucks She made my heart pound\n[02:29.71]and skip a beat when I see her in the street\n[02:32.53]and At school on the playground\n[02:34.30]but I really wanna see her on the weekend She know she\n[02:37.45]got me dazing cause she was so amazin And now my\n[02:40.07]heart is breakin but I keep on sayin\n[02:42.44]Baby baby baby ooh\n[02:45.61]Like baby baby baby noo\n[02:49.28]Like baby baby baby\n[02:53.28]Thought You had always be mine mine\n[02:57.08]Baby baby baby ooh\n[03:00.35]Like baby baby baby noo\n[03:04.11]Like baby baby baby\n[03:08.00]Thought You had always be mine mine\n[03:11.34]Im gone\n[03:14.85]Repeat 3x Now Im all gone\n[03:23.57]Gone. gone\n[03:25.64]Im gone\n",
    },
    {
      name: "Perfect",        // Data-Switch = 1
      artist: "Ed Sheeran",
      url: "songs/Perfect.mp3",
      cover: "img/ed-sheeran-perfect.jpg",
    },
    {
      name: "Blank Space",    // Data-Switch = 2
      artist: "Taylor Swift",
      url: "songs/Blank Space.mp3",
      cover: "img/taylor-swift.jpg",
    },
    {
      name: "It Ain't Me",     // Data-Switch = 3
      artist: "Selena Gomez",
      url: "songs/It Aint Me.mp3",
      cover: "img/it-aint-me.jpg",
    },
    {
      name: "Love Me Like You do",   // Data-Switch = 4
      artist: "Ellie Golding",
      url: "songs/Love Me Like You Do.mp3",
      cover: "img/love_me_like_you_do.jpg",
    },
    {
      name: "Soch Na Sake",         // Data-Switch = 5
      artist: "Arjit Singh",
      url: "songs/Soch Na Sake.mp3",
      cover: "img/SochNaSake.jpg",
    },
    {
      name: "Chal Wahan Jaate Hain",      // Data-Switch = 6
      artist: "Arjit Singh",
      url: "songs/Chal Wahan Jaate Hain.mp3",
      cover: "img/ChalWahanJateHai.jpg",
    },
    {
      name: "Humari Adhuri Kahani",     // Data-Switch = 7
      artist: "Arjit Singh",
      url: "songs/Hamari Adhuri Kahani.mp3",
      cover: "img/HumariAdhuriKahani.jpg",
    },
    {
      name: "Main Dhoondne Ko Zamaane Mein",      // Data-Switch = 8
      artist: "Arjit Singh",
      url: "songs/Main Dhoondne Ko Zamaane Mein.mp3",
      cover: "img/MainDhoondneKoZamaaneMein.jpg",
    },
    {
      name: "Saadi Galli Aaja",       // Data-Switch = 9
      artist: "Ayushmann Khurana",
      url: "songs/Saadi Galli Aaja.mp3",
      cover: "img/SaadiGaliAaja.jpg",
    },
    {
      name: "Zindagi",        // Data-Switch = 10
      artist: "Pritam & Jubin Nautiyal",
      url: "songs/Zindagi.mp3",
      cover: "img/ZindagiKuchTohBata.jpg",
    },
    {
      name: "Mar Jaayen",     // Data-Switch = 11
      artist: "Atif Aslam",
      url: "songs/Mar Jaayen.mp3",
      cover: "img/MarJayeen.jpg",
    },
    {
      name: "Saagar Jaisi Aankhon Wali",   // Data-Switch = 12
      artist: "Kishor Kumar",
      url: "songs/Saagar Jaisi Aankhon Wali.mp3",
      cover: "img/SagarJaisiAankhonWali.jpg",
    },
    {
      name: "Mast Magan",       // Data-Switch = 13
      artist: "Arjit Singh",
      url: "songs/Mast Magan.mp3",
      cover: "img/MastMagan.jpg",
    },
    {
      name: "Likhe Jo Khat Tujhe",      // Data-Switch = 14
      artist: "Mohd Rafi",
      url: "songs/Likhe Jo Khat Tujhe.mp3",
      cover: "img/LikheJoKhatTujhe.jpg",
    },
    {
      name: "Punjabi Remix",      // Data-Switch = 15
      artist: "Dj India",
      url: "songs/Punjabi Party Mashup Remix.mp3",
      cover: "img/punjabi party hits.jpg",
    },
    {
      name: "Meditation",      // Data-Switch = 16
      artist: "Unknown",
      url: "songs/RunningWaters.mp3",
      cover: "img/water-meditation.jpg",
    },
    {
      name: "Hanuman Chalisa",      // Data-Switch = 17
      artist: "Unknown",
      url: "songs/Hanuman-chalisa.mp3",
      cover: "img/hanuman-chalisa.jpg",
    },
    {
      name: "Hip Pop",      // Data-Switch = 18
      artist: "Unknown",
      url: "songs/HipHop1.mp3",
      cover: "img/party-hits.png",
    },
    {
      name: "Phir Bhi Tumko Chahunga",      // Data-Switch = 19
      artist: "Arjit Singh",
      url: "songs/Phir Bhi Tumko Chahunga.mp3",
      cover: "img/Main-phir-bhi-tumko-chahunga.jpg",
    }, 
    {
      name: "Wake Up Sid",      // Data-Switch = 20
      artist: "Shaankar-Eshaan-loy",
      url: "songs/Wake Up Sid.mp3",
      cover: "https://www.pagalworld.mobi/GpE34Kg9Gq/113206/thumb-wake-up-sid-300.jpg",
    }
  ]
});
