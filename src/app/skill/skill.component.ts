import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  skill_list={
    front_end:['Vue','Angular','React'],
    data_engineer:['hadoop','Hbase','Mahout','Spark'],
  };
}
