window.addEventListener('keydown', (e) => {
    document.querySelectorAll('.key').forEach(ke => {ke.style.display = 'flex'});
    var key = e.key;
    var keyCode = e.keyCode;
    var code = e.code;
    document.querySelector('.key:first-child').innerHTML = `${key === ' '? 'space' : key} <small>event.key</small>`;
    document.querySelector('.key:nth-child(2)').innerHTML = `${keyCode} <small>event.keycode</small>`;
    document.querySelector('.key:nth-child(3)').innerHTML =  `${code} <small>event.code</small>`;

})
