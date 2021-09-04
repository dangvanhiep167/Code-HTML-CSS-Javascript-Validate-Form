var questions = [
    {
        name: '98',
        listOfQuestion: 'Anh yeu Em'
    },

    {
        name: '99',
        listOfQuestion: 'Em yeu Anh'
    }


];

function addElementInput(this){
    




}

document.addEventListener("DOMContentLoaded", function(){
    alert("Anh yeu em");
});

{/* <tr>
    <td class="sharp">98</td>
    <td class="listOfQuestion">Great poll</td>
    <td class="listOfButton">
        <button class="btn-mgr">View results</button>
        <button class="btn-mgr">Close poll</button>
        <button class="btn-mgr">Delete</button>
    </td>
</tr> */}

function renderListQuestion(){

    var html = '';

    for (var question of questions) {
        html += '<tr>';
        html +=     '<td class="sharp">98</td>';
        html +=     '<td class="listOfButton">'; 
        html +=     '<td class="listOfButton">';
        html +=     '<button class="btn-mgr">View results</button>';
        html +=     '<button class="btn-mgr">Close poll</button>';
        html +=     '<button class="btn-mgr">Delete</button>';
        html +=     '</td>';
        html += '</tr>';
    }


}
