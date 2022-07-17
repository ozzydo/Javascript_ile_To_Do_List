function newElement()
{
    const taskDOM = document.querySelector('#task')
    let yenielement=""  // boş string olarak ayarladım
        if(onlySpaces(taskDOM.value)==true) 
        {
            console.log("Yanlış işlem")
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


//içinde bir değer olup olamdığını kontrol ediyor bir değer yoksa "true" çıktısı veriyor
function onlySpaces(str) {
    return str.trim().length === 0;
}


let listDOM = document.querySelector('#list')
const addItem = (todoList)=>{
    let liDOM = document.createElement("li") // element oluştruldu    
    liDOM.innerHTML = `${todoList}` // elementin içine yazıldı
    listDOM.append(liDOM); // element eklendi
}
