import {Component, OnInit} from '@angular/core';
import {Album} from './album';
import {AlbumService} from './album.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'albums';

  albums: Album[];
  form: FormGroup;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.albumService.getList().subscribe(next => {
      this.albums = next;
    });
  }

  createAlbum(albumForm) {
    this.albumService.createAlbum(albumForm.value).subscribe(() => {
      console.log('Thành công');
    }, err => {
      console.log(err);
    });
  }

  deleteAlbum(id) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('Thành công');
    }, err => {
      console.log('Thất bại');
    });
  }
}
