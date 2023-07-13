window.onload = () => {
    navbarBg();

    $(window).on('scroll', () => {
        navbarBg();
    })

    function navbarBg(){
        if(scrollY > 50){
            $('#custom-navbar').css('background-color', 'black');
        } else {
            $('#custom-navbar').css('background-color', 'rgba(34, 34, 34, 0)');
        }
    }

    $('#type-effect').val('')

    let typeWord1 = 'WEB DESIGNER';
    let typeWord2 = 'WEB DEVELOPER';
    let wordNum = 1
    let reverse = false;

    const typeEffect = setInterval(() => { doTypeEffect() }, 200);

    function doTypeEffect() {
        setTimeout(() => {
            let chosenWord = ''

            wordNum == 1 ? chosenWord = typeWord1 : chosenWord = typeWord2;

            let textbox = $('#type-effect');

            if (reverse == true) {
                let arr = textbox.val().split('');
                arr.splice(arr.length - 1, 1);
                textbox.val(arr.join(''));

                if (arr.length == 0) {
                    reverse = false;
                    wordNum == 1 ? wordNum = 2 : wordNum = 1;
                }
            }

            if (textbox.val() != chosenWord && textbox.val().length < chosenWord.length && reverse == false) {
                let arr = chosenWord.split('');
                textbox.val(textbox.val() + arr[textbox.val().length]);
            } else if (textbox.val() == chosenWord) {
                reverse = true;
            }
        }, Math.floor(Math.random() * 1000));
    }
}