$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));

        $('#toast').toast({ autohide: false }).toast('show');
        
        
    });
    
    //!!NOTE: I had to go find tutorials about event listeners, I couldn't recall how they work
    document.addEventListener('keydown', function(escapekey){
        if(escapekey.key === "Escape"){
            $('#toast').toast({ autohide: true }).toast('hide');
        }
    });
});

