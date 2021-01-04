var button = document.getElementsByClassName('btn');

button.addEventListener('click', function () {
    var category = button.innerHTML;
    console.log(category);
    return category;
});

module.exports = category;
