async function checkPermit(){

const passport=document.getElementById("passport").value.trim();
const dob=document.getElementById("dob").value;
const resultDiv=document.getElementById("result");

if(!passport || !dob){
resultDiv.innerHTML="<p class='invalid'>Please enter Passport Number and Date of Birth</p>";
return;
}

const response=await fetch("visas.json");
const data=await response.json();

const record=data.records.find(
r=>r.passport===passport && r.dob===dob
);

if(record){

resultDiv.innerHTML=`
<div class="result-card">

<h3 class="valid">Work Permit Status: VALID</h3>

<p><strong>Name:</strong> ${record.name}</p>
<p><strong>Nationality:</strong> ${record.nationality}</p>
<p><strong>Passport Number:</strong> ${record.passport}</p>
<p><strong>Date of Birth:</strong> ${record.dob}</p>
<p><strong>Permit Number:</strong> ${record.permit}</p>
<p><strong>Company:</strong> ${record.company}</p>

</div>
`;

}else{

resultDiv.innerHTML=`
<div class="result-card">
<p class="invalid">Record Not Found</p>
</div>
`;

}

}
