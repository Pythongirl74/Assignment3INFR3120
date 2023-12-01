// Immidiate invoked function expression
(function(){
    function Start(){
        console.log("Application started....");
        let DeleteButtons = document.querySelectorAll('.btn-danger');
        for(button of DeleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign('/assignments');
                }
            })
        }
    }
    window.addEventListener("load",Start);
})();