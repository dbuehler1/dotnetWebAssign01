$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function checkChange() {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__heartBeat');
    });
    $(document).ready(function(){
        var animations = [
            "animate__animated animate__heartBeat",
            "animate__animated animate__bounce",
            "animate__animated animate__flash",
            "animate__animated animate__pulse",
            "animate__animated animate__rubberband",
            "animate__animated animate__shakeX",
            "animate__animated animate__shakeY",
            "animate__animated animate__headShake",
            "animate__animated animate__swing",
            "animate__animated animate__tada",
            "animate__animated animate__wobble",
            "animate__animated animate__jello"
        ];
        var selectedID = Math.floor((Math.random() * 11) + 0);
        var selectedAnimation = animations[selectedID];
        $("h1:first").addClass(selectedAnimation);

        
        
    });

    $(document.getElementById("checkAll")).click(function(){
        if(document.getElementById("red").checked == true || document.getElementById("blue").checked == true || document.getElementById("green").checked == true){
            document.getElementById("red").checked = false;
            document.getElementById("green").checked = false;
            document.getElementById("blue").checked = false;
            $('#redImg').removeClass().addClass('animate__animated animate__bounceOutUp');
            $('#blueImg').removeClass().addClass('animate__animated animate__bounceOutUp');
            $('#greenImg').removeClass().addClass('animate__animated animate__bounceOutUp');

        }
        else{
            document.getElementById("red").checked = true;
            document.getElementById("green").checked = true;
            document.getElementById("blue").checked = true;
            $('#redImg').removeClass().addClass('animate__animated animate__bounceInDown');
            $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown');
            $('#greenImg').removeClass().addClass('animate__animated animate__bounceInDown');
        }
    });
            
        $(document.getElementsByClassName("redLabel")).mouseover(function(){
            document.getElementById("heading").style.color = "red";
        })
        $(document.getElementsByClassName("greenLabel")).mouseover(function(){
            document.getElementById("heading").style.color = "green";
        })
        $(document.getElementsByClassName("blueLabel")).mouseover(function(){
            document.getElementById("heading").style.color = "blue";
        })
    

    $('#submit').on('click', function(e){
        if(document.getElementById("red").checked == false && document.getElementById("blue").checked == false && document.getElementById("green").checked == false){
            e.preventDefault();      
            $('#toast').toast({ autohide: false }).toast('show');
            document.getElementById("Warn").style.color = "red";
        }
    });
        
    
        
        
        
    
    
        
    
    

    

});