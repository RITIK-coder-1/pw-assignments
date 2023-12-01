const dropdown = ["JavaScript", "Java", "Python", "C++"]

const selectDropdown = document.getElementById('dropdown');

dropdown.forEach(language => {
    const option = document.createElement('option');
    option.value = language
    option.textContent = language
    selectDropdown.append(option)
});