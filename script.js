const ctx=document.getElementById("revenues")

Chart.defaults.color="#fff";
Chart.defaults.font.family="open sans"

new Chart(ctx,{
    type:"bar",
    data:{
        labels:[
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    datasets: [
        {
            label: "Revenue $(Million) USD",
            data:
            [1.2,2.2,3.3,4.4,5.5,6.6,7.7,8.8,9.9,10.2,11.2,12.3],
            backgroundColor:"#F4BD50",
            borderRadius:6,
            borderSkipped:false,
        },
    ],
},

options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
        legends:{
            display:false,
        },
        title:{
            display:true,
            title:"Billinore USD Scale Chart",
            padding:{
                bottom:16,
            },
            font:{
                size:32,
                weight:"normal",
            },
        },
        tooltip:{
            backgroundColor:"#27292D",
        },
    },
    scales:{
        x:{
            border:{
                dash:[2,4],
            },
            grid:{
                color:"#27292D",
            },
            title:{
                text:"2023"
            },
        },
        y:{
            border:{
                dash:[2,4],
            },
            grid:{
                color:"#27292D",
            },
            beginAtZero:true,
            title:{
                display:true,
                text:"Revenue Collection Across Global"
            },
        },
    },
},
})