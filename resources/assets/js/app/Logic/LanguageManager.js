export function GetCurrentLang(){
      let lang = window.navigator.language;
      let langAbrev = lang.split('-');
      return langAbrev[0];
    }
export class LanguageManager{
  constrcutor(currentLang, choosenLang){
    this.currentLang = currentLanguages;
    this.choosenLan = choosenLang;
  }



  setLang(){

  }



}