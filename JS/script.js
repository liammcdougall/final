document.querySelector('toggle').addEventListener(
    'click', themeswitch()
)

function themeswitch(){
    if(document.body(".light-theme")(
    document.removeClass('light-theme').addClass('dark-theme')
    ));

    else
        document.removeClass('dark-theme').addClass('light-theme')
        

    
}