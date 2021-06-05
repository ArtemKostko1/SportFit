/**
 * ## type strings (default 1):
 * ## 1 = 01.11.2020
 * ## 2 = 11.01.2020
 * ## 3 = 2020.01.11
 * ## 4 = 2020.11.01
 * ## 5 = 10:00
 * ## shortYear if true: 01.11.20 in all types (2 symbol in year)
 */
const dateFormat = (dateValue, separator = ".", typeString = 1, shortYear = false) => {
     if (dateValue === null)
         return null;
     
    let date = new Date(dateValue);
    if (date) {
        let day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
        
        let month = date.getMonth();
        if (month.toString().length === 1 && month === 9) {
            month = 10;
            
        } else {
            month = date.getMonth().toString().length === 1 ? "0" + (date.getMonth()+1) : (date.getMonth()+1);
        }
        
        let year = shortYear ? date.getFullYear().toString().substr(2) : date.getFullYear();
        
        let hours = date.getHours().toString().length === 1 ? "0" + date.getHours() : date.getHours();
        let minutes = date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes();
        
        
        let result = "";
        switch (typeString)
        {
            case 1:
                result = day + separator + month + separator + year;
                break;
            case 2:
                result = month + separator + day + separator + year;
                break;
            case 3:
                result = year + separator + day + separator + month;
                break;
            case 4:
                result = year + separator + month + separator + day;
                break;
            case 5:
                result = hours + separator + minutes;
                break;
            default:
                result = day + separator + month + separator + year;
                break;
        }
        return result;
    }
    else
    {
        return "Некорректная дата";
    }
}

export default dateFormat;