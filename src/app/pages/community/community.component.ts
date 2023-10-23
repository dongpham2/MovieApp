import { Component } from '@angular/core';
import { slideInterface } from 'src/interfaces';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  images :slideInterface[] = [
    {img:"https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg"},
    {img: "https://vapa.vn/wp-content/uploads/2022/12/anh-con-nguoi-dep-003.jpg"},
    {img: "https://nld.mediacdn.vn/thumb_w/540/2020/5/29/doi-hoa-tim-8-15907313395592061395682.png"},
    {img: "https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyi5NO0bm-qzZnEmRWebeb3iBH6useglFmNhQI6gWkZmyZb3stxZomWqriXY5vdOyEqg&usqp=CAU"},
    {img: "https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/201706/original/images1920558_4053279_16.jpg"}
  ];
}
