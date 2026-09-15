
for (var i = 1; i <= 5; i++) {
    console.log(i + '回目のループ');
}

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var addButton = document.getElementById('addButton');
var input = document.getElementById('input');
var output = document.getElementById('output');
var dataTableBody = document.getElementById('dataTableBody');
var rowCountDisplay = document.getElementById('rowCount');


var colors = ['lightblue', 'lightgreen', 'lightcoral'];
var colorIndex = 0;
button1.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});


button2.addEventListener('click', function(){
    if (input.value === '') {
        alert('入力欄が空です。');
        return;
    }
    output.textContent = input.value;
    output.classList.toggle('highlight');
});


function updateRowStatus(){
    var currentRowCount = dataTableBody.getElementsByTagName('tr').length;

    rowCountDisplay.textContent = '現在の行数：' + currentRowCount + '件';

    if (currentRowCount >= 3) {
        button2.style.display = 'none';
    } else {
        button2.style.display = '';
    }
}


addButton.addEventListener('click', function(){
    if (input.value === '') {
        alert('入力欄が空です。');
        return;
    }

    var newRow = document.createElement('tr');

    var textCell = document.createElement('td');
    textCell.textContent = input.value;
    newRow.appendChild(textCell);

    var buttonCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function(){
        newRow.remove();
        updateRowStatus();
    });
    buttonCell.appendChild(deleteButton);
    newRow.appendChild(buttonCell);

    dataTableBody.appendChild(newRow);

    var MAX_ROWS = 3;
    while (dataTableBody.getElementsByTagName('tr').length >MAX_ROWS) {dataTableBody.firstElementChild.remove();
    }

    updateRowStatus();

    input.value = '';
});

