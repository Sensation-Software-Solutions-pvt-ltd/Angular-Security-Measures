import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AESEncryptDecryptService } from 'src/app/services/aes-encryptdecrypt-service/aesencrypt-decrypt-service.service';
import { data } from '../../data/user-data/data';
import { userDetailModal } from '../../interface/user-detail-interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail = {} as userDetailModal;
  listData = [...data];
  userList: userDetailModal[] = [];
  constructor(private _activateRouter: ActivatedRoute,
    private _encryptDecryptService: AESEncryptDecryptService,private _router:Router) {
    this.userList = [...data];
  }

  ngOnInit(): void {
    this._activateRouter
      .queryParams
      .subscribe(params => {
        const decryptId = this._encryptDecryptService.decrypt(params['_u']);
        this.getUserDetail(decryptId)
      });
  }
  getUserDetail(candidateId: string) {
    let candidateFound : any = this.listData.find((p: userDetailModal) => p.candidateId == candidateId);
    this.userDetail=candidateFound;
  }
  redirect(){
    this._router.navigate(["user/user-list"]);
  }
}
