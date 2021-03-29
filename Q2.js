input ="9:02:00 AM"
k=input.split(" ")
t=k[0].split(":")
let t2,t3;
if(k[1]=="PM"){
  if( t[0]<12){
    t[0]=(parseInt(t[0]) + 12)%24
  }
  t2=parseInt(t[1])+45;
  if(t2>=60){
    t2=t2-60
    t[0]+=1
  }
  t3=parseInt(t[2])+45
  if(t3>=60){
    t3=t3-60
    t2+=1
  }
}
if(k[1]=="AM"){
  if(t[0]>=12){
  t[0]=parseInt(t[0])-12
  }
  t2=parseInt(t[1])+45;
  if(t2>=60){
    t2=t2-60
    t[0]+=1
  }
  t3=parseInt(t[2])+45
  if(t3>=60){
    t3=t3-60
    t2+=1
  }
}
console.log(parseInt(t[0])+":" + t2+ ":"+ t3)