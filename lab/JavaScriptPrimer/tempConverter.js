"use strict";
var TempConverter = (function () {
    function TempConverter() {
    }
    /*static convertFToC(temp: number): string{
        return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }*/
    /*static convertFToC(temp: number | string): string{
        let value:number =
            (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }*/
    /*static convertFToC(temp: number | string): string{
        let value:number =
            (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }*/
    /*static convertFToC(temp: any): string{
        let value:number =
            (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }*/
    TempConverter.convertFToC = function (temp) {
        var value;
        //var value:number;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        return (TempConverter.performCalculation(value)).toFixed(1);
    };
    TempConverter.performCalculation = function (value) {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    };
    TempConverter.justSayHello = function () {
        console.log("Hello");
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
