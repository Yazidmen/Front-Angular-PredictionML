import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ucl',
  templateUrl: './ucl.component.html',
  styleUrls: ['./ucl.component.css']
})
export class UclComponent implements OnInit {
  form: FormGroup |any;
  headers:HttpHeaders|any;
  Teams = [
    "Atlético Madrid",
    "Ajax",
    "Barcelona",
    "Bayern München",
    "Borussia Dortmund",
    "Chelsea",
    "Inter",
    "Juventus",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Napoli",
    "Paris Saint Germain",
    "Real Madrid",
    "RB Leipzig",
    "Sevilla",
    "Tottenham Hotspur",
    "Zenit"
  ]
  constructor(private formBuilder:FormBuilder ,private http : HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      homeTeamName:'',
      awayTeamName:''
    });
    //this.Teams = this.getTeams() 
    console.log(this.Teams)

  }

  getTeams():any{
    let tm : any
    this.http.get<string[]>('http://localhost:8000/getteams').subscribe(
      (res:string[]) =>{
       console.log(res)
       tm = res
      }
    )
    return tm

  }

  submit(): void{
    this.http.post('http://localhost:8000/predictbyteam',this.form.getRawValue()).subscribe(res =>{
      
      console.log(res);
      const resu= Object.values(res)
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: '<h1 style="color:#361681;">The probabilities : \n \n </h1>'
         +'<h1 style="color:#011144;">'+this.form.getRawValue().homeTeamName +" : </h1>"+parseFloat(resu[0]).toFixed(2)  +"\n \n"
         +"<h1 style='color:#011144;'>    X   </h1> "+parseFloat(resu[1]).toFixed(2)+"\n \n"
         +'<h1 style="color:#011144;">'+this.form.getRawValue().awayTeamName +" : </h1>"+parseFloat(resu[2]).toFixed(2)  +"\n \n",
         showConfirmButton: false,
         timer: 6000
       })


      
    })
     
  }

  }


 


