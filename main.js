jQuery(document).ready(function() {
            // Exibe ou oculta o botão
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('.back-to-top').fadeIn(200);
                } else {
                    jQuery('.back-to-top').fadeOut(200);
                }
            });
            
            // Faz animação para subir
            jQuery('.back-to-top').click(function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, 500);
            })
        });
