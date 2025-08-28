document.getElementById('add-btn').addEventListener('click', function(){
    const addValue = document.getElementById("heading").innerText
    document.getElementById("heading").innerText = 'i love my mother'
    console.log(addValue)
})