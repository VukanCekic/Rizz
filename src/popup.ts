const button = document.getElementById('ce_button');
if (button != null) {
  button.addEventListener('click', function () {
    window.open('https://www.example.com', 'example', 'width=400,height=300');
  });
}
