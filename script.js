$(document).ready(function () {

$('#notepad-content').val(`                                                          __      ______          __ __          
                                                         |  \\    /      \\        |  |  \\         
 ______ ____  __    __         ______   ______   ______ _| $$_  |  $$$$$$\\______ | $$\\$$ ______  
|      \\    \\|  \\  |  \\       /      \\ /      \\ /      |   $$ \\ | $$_  \\$/      \\| $|  \\/      \\ 
| $$$$$$\\$$$$| $$  | $$      |  $$$$$$|  $$$$$$|  $$$$$$\\$$$$$$ | $$ \\  |  $$$$$$| $| $|  $$$$$$\\
| $$ | $$ | $| $$  | $$      | $$  | $| $$  | $| $$   \\$$| $$ __| $$$$  | $$  | $| $| $| $$  | $$
| $$ | $$ | $| $$__/ $$      | $$__/ $| $$__/ $| $$      | $$|  | $$    | $$__/ $| $| $| $$__/ $$
| $$ | $$ | $$\\$$    $$      | $$    $$\\$$    $| $$       \\$$  $| $$     \\$$    $| $| $$\\$$    $$
 \\$$  \\$$  \\$$_\\$$$$$$$      | $$$$$$$  \\$$$$$$ \\$$        \\$$$$ \\$$      \\$$$$$$ \\$$\\$$ \\$$$$$$ 
             |  \\__| $$      | $$                                                                
              \\$$    $$      | $$                                                                
               \\$$$$$$        \\$$                                                                




Hi, I'm Arthur Cruz — a Full Stack Web Developer with experience in C#, ASP.NET Core, .NET, JavaScript, PHP, and Laravel.  


Currently, I'm a 7th-semester Software Engineering student at Unileste,  
focused on building scalable, maintainable, and modern web applications.




                           #:           
                        :%@%%           
                      *%@@%#@*          
                    :%@@%###%@          
               .+#%#++++#%%#%%          
           =%@@@@@+=****++@@%%#         
        :%@@@@@@@*+*%%%%#+%@@@@%#       
%%%@@@%@@@@@@@@@@++%%@%%%*%@@@@@%#      
+####*%@@@@@@@@@@*++%@%%%*@@@@@@@%#     
.%#*+*##@@@@@@@@@%+#%%%%#@@@@@@@@%%+    
 %%+*#%%@@@@@@@@@@@%#%@@@@@@@@@@@@%#    
  %+*#%@%@@@@@@@@@@@@%%######%%@@@@#    
  @*+*%%%@@@@@%####***#********#@@@*    
  @@*+*%%@@%##**#**###********#@@@@+    
 :@@@@*#@##***##*************#@@@%:     
  @@@@@%#**###*************##@@@+       
   @@@##******************#@@@%         
   -@%#****************##@@@@#+=        
     #@#*#********##########%%##*=.::   
       +*@@@%%#######%##%###@@%####+    
                .##########%@@@%###*-   
                *#########%@@@@@%=.     
                -##%######@@@@@@@%      
               .+########@@@@@@@@@@.    
                *######%@@@@@@@@@@@@+        
`);

    const $shortcut = $('.shortcut-wrapper');
    const $notepadWindow = $('#notepad-window');
    const $closeBtn = $('#notepad-close');
    const $notepadHeader = $('#notepad-header');
    const $notepadIcon = $('#notepadIcon');

    $notepadIcon.hide()

    $shortcut.on('dblclick', function () {
        $notepadWindow.css('display', 'flex');
        $notepadIcon.show()
        $('#notepadIcon').parent('.logos-wrapper').addClass('active');
    });

    $closeBtn.on('click', function () {
        $notepadWindow.css('display', 'none');
        $('#notepadIcon').parent('.logos-wrapper').removeClass('active');

        $notepadIcon.hide()
    });

    let isDragging = false;
    let offsetX, offsetY;

    $notepadHeader.on('mousedown', function (e) {
        isDragging = true;
        const rect = $notepadWindow[0].getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        $('body').css('user-select', 'none');
    });

    $(document).on('mousemove', function (e) {
        if (isDragging) {
            $notepadWindow.css({
                left: (e.clientX - offsetX) + 'px',
                top: (e.clientY - offsetY) + 'px'
            });
        }
    });

    $(document).on('mouseup', function () {
        isDragging = false;
        $('body').css('user-select', 'auto');
    });

    // $(function () {
    //     $('#notepad-window').resizable({
    //         handles: 'n, e, s, w, ne, se, sw, nw'
    //     });
    // });
});