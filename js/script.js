
/*******************girilen texti alıp, kelimelerin baş harflerini büyük yapmak için********************/

function newElement()
{
    const taskDOM = document.querySelector('#task')
    let yenielement=""  // boş string olarak ayarladım
        if(onlySpaces(taskDOM.value)==true) 
        {
            console.log("Yanlış işlem")
            $('.error').toast('show')
            taskDOM.value=""
        }
        else if(taskDOM.value){
            console.log("Doğru işlem")
            const tasksplited = taskDOM.value.split(" ") //stringi ogelerine ayirdik
            
            //ayırdığımız kelimelerin ilk harfini büyük yaptık
            let buyuktask = tasksplited.forEach((element) => {
            yenielement += ` ${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`
            
            })
            addItem(yenielement.trim()) //element ekleme fonksiyonuna göderilirken trim ile boşluklar kesildi, baştan ve sondan
            taskDOM.value="" // input çubuğu sıfırlandı
        }
}

/******************girilen textin dolu olup olmadığını kontrol etmek için********************/

//içinde bir değer olup olamdığını kontrol ediyor bir değer yoksa "true" çıktısı veriyor
function onlySpaces(str) {
    return str.trim().length === 0;
}

/*******************listeye eleman eklemek için************************/

let listDOM = document.querySelector('#list')
const addItem = (todoList)=>{
    let liDOM = document.createElement("li") // element oluştruldu    
    liDOM.innerHTML = `${todoList} <span class="kapat" onclick="this.parentElement.remove()">x</span>` // elementin içine yazıldı
    liDOM.addEventListener('click',cizgi)
    listDOM.append(liDOM) // element eklendi
    $('.success').toast('show')
    localStorage.setItem('listInfo', JSON.stringify(liDOM.innerHTML))
    function cizgi(){
        let classes = liDOM.classList
        console.log(classes)
        classes.value == 'checked' ? liDOM.classList.remove('checked') : liDOM.classList.add('checked')
    }
}

/*******************listede var elemanları silmek için*************************/

let closebtns = document.getElementsByClassName("kapat")
var i
// Loop through the elements, and hide the parent, when clicked on
for (i = 0; i < closebtns.length; i++)
{
closebtns[i].addEventListener("click", function() {
    //this.parentElement.style.display = 'none';
    this.parentElement.remove()
  });
}

/*******************listede var olan elemanları yapıldı işaretlemek için********************/

let liDOM2 = document.querySelectorAll('li')
var j 

for (j = 0; j < liDOM2.length; j++){
    liDOM2[j].addEventListener("click", function() {
        console.log(this.classList)
        let classes = this.classList
        classes.value == 'checked' ? this.classList.remove('checked') : this.classList.add('checked')
      });
}
/*---------------------------------------------------------------*/
