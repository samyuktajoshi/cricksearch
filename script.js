
async function displayData(playerid){
	const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerid}`;

	console.log(playerid)
	const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '556c38c560msh6b60dcb2822b7ebp17233cjsncd2c388ce984',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
	try {
        const response = await fetch(url, options);
        const data = await response.json();

        const name=document.getElementById('name');
        name.textContent=data.name;

        const nickName=document.getElementById('nick-name');
        nickName.textContent=data.nickName;

        const country=document.getElementById('country');
        country.textContent=data.intlTeam;

        const dob=document.getElementById('dob');
        dob.textContent=data.DoB;

        const birthplace=document.getElementById('birthplace');
        birthplace.textContent=data.birthPlace;

        const image=document.getElementById('image');
        image.src=data.image;
        image.slt=data.name;


        const bio=document.getElementById('para');
        bio.innerHTML=data.bio;


        const nameTh=document.getElementById('nameTh');
        nameTh.textContent="Name";

        const countryTh=document.getElementById('countryTh');
        countryTh.textContent="Country";

        const nickNameTh=document.getElementById('nicknameTh');
        nameTh.textContent="Nick name";

        const dobTh=document.getElementById('dobTh');
        dobTh.textContent="Date of Birth";

        const BirthplaceTh=document.getElementById('BirthplaceTh');
        BirthplaceTh.textContent="Birthplace";

        console.log('Player Name:', data.name);
        console.log("Birth Place:",data.birthPlace);
        console.log("Country:",data.intlTeam);
        console.log("bio",data.bio);
    } catch (error) {
        console.error('Error:', error);
    }

}

async function fetchData(playerName) {
    var url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=${playerName}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '556c38c560msh6b60dcb2822b7ebp17233cjsncd2c388ce984',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        var flag=0;
        for(var i=0;i<data.player.length;i++){
            if(data.player[i].name.toLowerCase()===playerName.toLowerCase()){
                flag=1;
                break;
            }
        }
        if(flag==1){
            displayData(data.player[i].id);
        }
        else{
            alert("invalid name");
        }
    }
     catch (error) {
        console.error('Error:', error);
    }
}

function getData(){
    const name=document.getElementById('insert');
    const playerName = name.value;
    fetchData(playerName);
}