/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            
            $("#carouselButton").click(function()
            {
                if ( $("#carouselButton").children("span").hasClass('fa-pause') )
                {
                    $("#mycarousel").carousel("pause");
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ( $("#carouselButton").children("span").hasClass('fa-play') )
                {
                    $("#mycarousel").carousel({interval:2000});
                    $("#mycarousel").carousel("cycle");
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
            
            
            //reserve button without data-* attributes in <a> tag
            $("#reserveButtons").click(function(){
                $("#reserveTableModal").modal('toggle')
            });

            //reserve button without data-* attributes in <a> tag
            $("#loginButtons").click(function(){
                $("#loginModal").modal('toggle')
            });
        });
