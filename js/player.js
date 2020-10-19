$(document).ready(function () {
  $(".topSongs__pause").css("display", "none");
});

$(".topSongs__box").click(function (event) {
  $(this).find(".topSongs__pause").slideToggle();
  $(this).find(".topSongs__play").slideToggle();
  $(".topSongs__box")
    .not(this)
        .each(function () {
            $(this).find(".topSongs__pause").slideUp();
            $(this).find(".topSongs__play").slideDown();
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

// $('.topSongs__play').on('click',function(ev) {
//     ap.pause();
// })

// function showPause(id) {
   // // $('.topSongs__icon--play' + id).after('<svg class="topSongs__icon"><use xlink:href="img/sprites.svg#icon-pause2"></svg>');
//     $('.topSongs__icon--play' + id + '>' + ' ' + 'use').attr('xlink:href').value = "img/sprites.svg#icon-pause2";
// }

// function showPlay(id) {
//     $('.topSongs__icon--play' + id).after('<svg class="topSongs__icon"><use xlink:href="img/sprites.svg#icon-play3"></svg>');
// }

// // Box click Animation
// $('.topSongs__box').on('click',function(ev){
//     var id = $(this).attr('data-switch');
//     var check = $('.topSongs__icon--play' + id + '>' + ' ' + 'use').attr('xlink:href');
//     console.log(check);
//     if(check == "img/sprites.svg#icon-pause2") {
//         $('.topSongs__icon--play' + id + '>' + ' ' + 'use').attr('xlink:href') = "img/sprites.svg#icon-play3"
//         setTimeout(showPlay.bind(null, id), 400);
//         $('.topSongs__icon--play' + id).fadeOut();
//     }
//     else {
//         setTimeout(showPause.bind(null, id), 400);
//         $('.topSongs__icon--play' + id).fadeOut();
//     }
// })

// Player Play Query
$(".recommended__box").on("click", function (ev) {
  var dataId = $(this).attr("data-switch");

  // This switches the song by dataId
  ap.list.switch(dataId);

  ap.play();
  $("#aplayer").addClass("showPlayer");
  $(".playerIcon").addClass("showIcon");
});

$(".topSongs__box").on("click", function (ev) {
  var dataId = $(this).attr("data-switch");

  // This switches the song by dataId
  ap.list.switch(dataId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
  $(".playerIcon").addClass("showIcon");
});

var count = 0;
var id = 0;
$(".topSongs__box").on("click", function (ev) { 
    var changeId = id;
    id = $(this).attr("data-switch");
        if(id === changeId) {
            count = count + 1;
            if (count % 2 == 1) {
                ap.play();
            } else { 
                ap.pause();
            }
        } else {
            count = 1;
        }
});

$(".playerIcon").on("click", function (ev) {
  ap.pause();
  $("#aplayer").removeClass("showPlayer");
  $(".playerIcon").removeClass("showIcon");
});

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  lrcType: 1,
  audio: [
    {
      name: "Baby",
      artist: "Justin Bieber",
      url: "songs/Baby.mp3",
      cover: "img/justin.jpg",
      lrc:
        "[00:02.34]ah\n[00:06.21]ah\n[00:09.71]h aa\n[00:14.37]You know you love me\n[00:15.98]I know you care\n[00:17.70]Just shout whenever\n[00:19.44]And ill be there\n[00:21.38]You are my love you are my heart\n[00:24.98]And we will never ever ever be apart\n[00:29.05]Are we an item\n[00:30.68]Girl quit playin\n[00:32.72]We are just friends\n[00:34.47]What are you sayin\n[00:36.31]Said theres another and looked right in my eyes\n[00:39.85]My first love broke my heart for the first time\n[00:43.21]And I was like\n[00:44.17]baby baby baby\n[00:47.44]Like baby baby baby noo\n[00:51.11]Like baby baby baby\n[00:55.05]I thought You had always be mine mine\n[00:58.93]Babybaby baby ooh\n[01:02.54]Like baby baby baby noo\n[01:05.91]Like baby baby baby\n[01:10.00]I thought You had always be mine mine\n[01:13.37]Oh for you I would have done whatever\n[01:16.97]And I just cant believe we aint together\n[01:20.54]And I want to play it cool\n[01:22.72]but im loosing you\n[01:24.37]Ill buy you anything\n[01:26.15]ill buy you any ring\n[01:27.91]And I mean please say\n[01:29.97]baby fix me\n[01:31.70]And just shake me till you wake me from this bad dream\n[01:35.61]Im goin down down down down\n[01:39.20]And I just cant believe my first love wont be around\n[01:42.81]And im like baby baby baby\n[01:46.47]Like baby baby baby noo\n[01:50.14]Like baby baby baby\n[01:54.12]I thought You had always be mine mine\n[01:58.01]Baby baby baby ooh\n[02:01.31]Like baby baby baby noo\n[02:05.01]Like baby baby baby\n[02:08.98]I thought You had always be mine mine\n[02:12.61]LUDA\n[02:13.47]When I was 13 I had my first love\n[02:16.75]There was nobody that compared to my baby and\n[02:19.05]nobody came between us or could ever come above\n[02:21.37]She had me goin crazy oh I was star struck She woke me up\n[02:25.02]daily don′t need no starbucks She made my heart pound\n[02:29.71]and skip a beat when I see her in the street\n[02:32.53]and At school on the playground\n[02:34.30]but I really wanna see her on the weekend She know she\n[02:37.45]got me dazing cause she was so amazin And now my\n[02:40.07]heart is breakin but I keep on sayin\n[02:42.44]Baby baby baby ooh\n[02:45.61]Like baby baby baby noo\n[02:49.28]Like baby baby baby\n[02:53.28]Thought You had always be mine mine\n[02:57.08]Baby baby baby ooh\n[03:00.35]Like baby baby baby noo\n[03:04.11]Like baby baby baby\n[03:08.00]Thought You had always be mine mine\n[03:11.34]Im gone\n[03:14.85]Repeat 3x Now Im all gone\n[03:23.57]Gone. gone\n[03:25.64]Im gone\n",
    },
    {
      name: "Perfect",
      artist: "Ed Sheeran",
      url: "songs/Perfect.mp3",
      cover: "img/ed-sheeran-perfect.jpg",
    },
    {
      name: "Blank Space",
      artist: "Taylor Swift",
      url: "songs/Blank Space.mp3",
      cover: "img/taylor-swift.jpg",
    },
    {
      name: "It Ain't Me",
      artist: "Selena Gomez",
      url: "songs/It Aint Me.mp3",
      cover: "img/it-aint-me.jpg",
    },
    {
      name: "Love Me Like You do",
      artist: "Ellie Golding",
      url: "songs/Love Me Like You Do.mp3",
      cover: "img/love_me_like_you_do.jpg",
    },
  ],
});
