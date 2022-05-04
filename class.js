class Personel{
    
    //classlar pascal case yazılır
    
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet(){
        console.log("personel kaydedildi" + this.ad + this.soyad)
    }


}

const personel = new Personel("Sevim","Özsoy")
personel.kaydet();
// console.log(personel.ad + personel.soyad)