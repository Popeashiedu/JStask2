let data = [{Principal: 2500, time: 1.8}, {Principal:1000, time: 5}, {Principal: 3000, time: 1}, {Principal: 2000, time: 3}];
console.log(data.length)
interestData = []
function interestCalculator(data){
    for (let i=0; i<data.length; i++){
        if(data[i].Principal >= 2500 && 1 <data[i].time < 3){
            rate = 3;
        }
        else if( data[i].Principal >= 2500 && data[i].time > 3){
            rate = 4;
        }
        else if( data[i].Principal < 2500 && data[i].time >= 1){
            rate = 2;
        }
        else{
            rate = 1;
        }

        let interest = (data[i].Principal*rate*data[i].time) / 100
        singleData = {'Principal':data[i].Principal,'Rate' : rate,'Time':data[i].time,'Interest': interest}
        interestData.push(singleData)
        

    }
    console.log(interestData)
    return interestData
        
}

interestCalculator(data)