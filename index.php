<?php
include("connect.php");
$sql="SELECT * FROM  video";
$res=mysqli_query($conn,$sql);
if(isset($_GET["ps"])){
$b=$_GET["ps"];	
echo "<p id='bhanu' style='display:none;'>hello</p>";
echo "<h1 id='mykey' style='display:none'>bps</h1>";	
}

?>
<html>
<head>
<title>GOM Video Player</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86">
	
</head>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/all.min.css">
<link rel="stylesheet" href="css/fontawesome.min.css">
</head>
<body>
<div class="main" id="mainbox">

<div class="top">
<div class="logo"><b style="font-family: 'FontAwesome'; margin:5px;">GOM </b><span style="font-family: cursive;">Player</span><div class="setting" id="settings"><i class="fa-solid fa-gear"></i></div></div>

<div class="right">
<ul class="unoder">
<li class="oderlist"><input type="range" min="1" max="100" class="ops" onchange="city(this.value)" id="bps"></li>
<li class="oderlist"><i class="fa-solid fa-expand" id="fullscr"></i></li>
<li class="oderlist"><i class="fa-solid fa-window-minimize" style="margin-top: -7px;"></i></li>
<li class="oderlist"><i class="fa-solid fa-window-restore"></i></li>
<li class="oderlist"><i class="fa-solid fa-xmark"></i></li>

</ul>

</div>
</div>

<div class="center_tag" id="set_video">
<div id="about" class="about">
<ul class="xz">
<li class="aboutinfo">Name : Bhanu Pratap Singh</li>
<li class="aboutinfo">Software Name : Gom Video Player</li>
<li class="aboutinfo">Software Version : v1.0</li>
<li class="aboutinfo">Creation Date : 23-07-2022</li>
</ul>
<p class="qqp">This is a Video Player In this Player you can Play any video and with the help of this player you play any Direct link video and I this Player There are Many features are available Such as Filter,video fast,video slow play video,pause video etc..</p>

</div>
<div class="urlvideo" id="urlvideo">
<form class="fomm" action="index.php" method="get"><input type="text" class="inpss" name="ps" placeholder="Enter Video Url..."><button class="btnsp">Play Video</button></form>
</div>
<div class="video_code" id="myvideo1">

<video autoplay class='vd' id='myvideo'>
<source src='video/<?php echo $b;?>' value="1" id="ddp">
<source src='<?php echo $b;?>' value="1" id="ddp">
</video>
</div>

<div class="logos" id="logo">

<img src="logo.png" class="imgs">

</div>
<button class="bts" id="video_choose"><i class="fa-solid fa-list"></i> Choose Video</button>

<!------Show video play List----->
<div class="playlist" id="pls">
<ul class="video_un_list">
<?php while($row=mysqli_fetch_assoc($res)){
		$a=$row["source"];
		$aa=$row["name"];
		$pic=$row["image"];
		
		
	?>
<li class="video_list" onclick="playvideos()"><img src="thumb/<?php echo $pic;?>" class="thumb"><b class="bs"><form method="get" action="index.php"><input type="text" name="ps" value="<?php echo $a;?>" hidden><button style="width: 100%;height: 100px;border: 0px;background-color: #00000082;color: #fff;padding: 35px;"><?php echo $aa; ?></button></form></b></li>
<?php
}
?>
</ul>
</div>

</div>

<div class="bottom">
<div class="top_bottom">
<div class="lft">
<div class="left_time"><span id="lfhr">00</span>:<span id="lfmin">00</span>:<span id="lfsec">00</span></div>

<div class="center_progress" id="giveme">

<div class="back_progress" id="bk_progress"></div>
</div>
<div class="right_time" ><span id="hr">00</span>:<span id="min">00</span>:<span id="sec">00</span></div>
<div class="volume"><i class="fa-solid fa-volume-high" style="margin: 5px;"></i><input type="range" min="1" max="100" oninput="volumefun(this.value)" onchange="volumefun(this.value)"></div>
</div>




</div>
<div class="bottom_bottom">

<div class="list_box">
<ul class="ull">
<li class="bottom_list"><button class="btns" onload="play_video()" onclick="play_video()" id="cn"><i class="fa-solid fa-play"></i></button></li>
<li class="bottom_list"><button class="btns" id="gpsp"><i class="fa-solid fa-stop"></i></button></li>
<li class="bottom_list"><button class="btns" id="backforwords"><i class="fa-solid fa-backward-step"></i></button></li>
<li class="bottom_list"><button class="btns" id="forwords"><i class="fa-solid fa-forward-step"></i></button></li>
</ul>
</div>
<div class="box_gom">
<div class="text"><b class="bo">GOM Video Player</b></div>
</div>

<div class="bbs">
<ul class="list_box1">

<li class="bottom_list1"><button class="btns1" id="backfast"><i class="fa-solid fa-backward-fast"></i></button></li>
<li class="bottom_list1"><button class="btns1" id="fast"><i class="fa-solid fa-forward-fast"></i></button></li>

<li class="bottom_list1"><button class="btns1" id="tackcam"><i class="fa-solid fa-camera"></i></button></li>
<li class="bottom_list1">
<div class="boxfilter" id="boxflt">
<ul class="ulls">
<li class="llps" id="ft1">Filter 1</li>
<li class="llps" id="ft2">Filter 2</li>
<li class="llps" id="ft3">Filter 3</li>
<li class="llps" id="ft4">Filter 4</li>
<li class="llps" id="ft5">Filter 5</li>
<li class="llps" id="ft6">Filter Remove</li>
</ul>

</div>
<button class="btns1" id="filter"><i class="fa-solid fa-filter"></i></button></li>
<li class="bottom_list1"><button class="btns1" id="urllink"><i class="fa-solid fa-link"></i></button></li>
<li class="bottom_list1" onclick="playlist()"><button class="btns1"><i class="fa-solid fa-list"></i></button></li>
</ul>
</div>



</div>

</div>

</div>

<script src="js/javascript.js"></script>
<script src="js/html2canves.js"></script>

<body>
</body>
</html>