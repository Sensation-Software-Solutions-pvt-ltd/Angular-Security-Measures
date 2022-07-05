import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/services/aes-encryptdecrypt-service/aesencrypt-decrypt-service.service';
import { data } from '../../data/user-data/data'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  listData = [...data];
  constructor(private _router:Router,private _encryptDecryptService:AESEncryptDecryptService) { }

  ngOnInit(): void {
  }
  viewDetail(item:string){
    const encryptId =this._encryptDecryptService.encrypt(item);
    this._router.navigate(['/user/user-detail'], { queryParams: { _u: encryptId} });
  }
}
