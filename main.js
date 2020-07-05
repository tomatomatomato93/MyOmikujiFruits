'use script'
{
    const btn = document.getElementById('btn');
    const btn2 = document.getElementById('btn2');
    const today = document.getElementById('today');

    const todays = new Date();
    // const  = today.getFullYear();
    // const  = todays.getMonth();
    // const  = todays.getDate();
    
    today.textContent = `${todays.getFullYear()}年${todays.getMonth() + 1}月${todays.getDate()}日の`;

    startbtn.addEventListener('click', ()=>{
        const results = ['朝食','昼食','夕食','おやつ'];
        btn.textContent = results[Math.floor(Math.random() * results.length)];

        const n = Math.random() * 10;
        // btn2.textContent(results2);
        if(n < 4){
            btn2.textContent = 'マンゴー';
        } else if(n < 7){
            btn2.textContent = 'キウイ';
        }else if(n < 8){
            btn2.textContent = '桃';
        } else {
            btn2.textContent = 'メロン';
        }
    });

    btn.addEventListener('click', ()=>{
        const results = ['朝食','昼食','夕食','おやつ'];
        btn.textContent = results[Math.floor(Math.random() * results.length)];
    });

    btn2.addEventListener('click', ()=>{
        const results2 = ['マンゴー','キウイ','桃','メロン'];
        btn2.textContent = results2[Math.floor(Math.random() * results2.length)];
    });
}
