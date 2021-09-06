canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    mars_images=["1.jpg",  "2.jpeg", "3.jpeg", "4.jpg"];
    random_num= Math.floor(Math.random()*4);
    console.log(random_num);
    rover_width=100;
    rover_height=90;
    rover_x=10;
    rover_y=10;
    rover_img="rover.png";
    mars_img=mars_images[random_num];


    function add(){
        body_imgTag= new Image();
        body_imgTag.onload= uploadBg();
        body_imgTag.src="mars.jpg";

        rover_imgTag= new Image();
        rover_imgTag.onload= uploadRover();
       rover_imgTag.src="rover.png";
    }

    function uploadBg(){
        ctx.drawImage(body_imgTag, 0, 0, canvas.width, canvas.height);
    }
    
    function uploadRover(){
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
        var keyPressed=e.keyCode;
        console.log(keyPressed);

        if (keyPressed=="38"){
            console.log("up");
            up();
            
        }

        if (keyPressed=="40"){
            console.log("down");
            down();
            
        }

        if (keyPressed=="37"){
            console.log("left");
            left();
           
        }

        if (keyPressed=="39"){
            console.log("right");
            right();
            
        }
    }

    function up(){
        if (rover_y>=0){
            rover_y=rover_y-10;
          

            uploadBg();
            uploadRover();
        }
    }

    function down(){
        if (rover_y<=500){
            rover_y=rover_y+10;
          
            
            uploadBg();
            uploadRover();
        }
    }

    function left(){
        if (rover_x>=0){
            rover_x=rover_x-10;
           
            
            uploadBg();
            uploadRover();
        }
    }

    function right(){
        if (rover_x<=700){
            rover_x=rover_x+10;
            
        
            uploadBg();
            uploadRover();
        }
    }
