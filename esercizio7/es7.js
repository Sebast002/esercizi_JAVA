
function closureprintNamehelloName() {
    let helloName = "Hello John";
    function es7() {
        setTimeout(() => {
            console.log(helloName)
        }, 500)
        return helloName;
    } return es7;
}

function innerhelloName() {
    let helloName1 = "Hello John";
    function es7a() {
        setTimeout(() => {
            console.log(helloName1)
        }, 1000)
        return helloName1;
    } return es7a;
}

closureprintNamehelloName()();
innerhelloName()();