function a(){
    let s=3;

    function b(){
        let x=4;

        function c(){
            let y=2;
            console.log( x+y+s);
        }
        c();
    }
    b();
}

a();