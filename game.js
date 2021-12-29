
    function getRandomInt() {
        min = Math.ceil(1);
        max = Math.floor(101);
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        
        function changeNumber() {
            console.log(randomNumber)
            
        }
        changeNumber()
    }
    getRandomInt()